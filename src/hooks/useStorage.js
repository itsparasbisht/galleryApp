import React, {useState, useEffect} from 'react'
import {db, storage, timeStamp} from '../firebase'

function useStorage(file) {
    const[progress, setProgress] = useState(0)
    const[error, setError] = useState(null)
    const[url, setUrl] = useState(null)

    useEffect(() => {
        const uploadTask = storage.ref(`images/${file.name}`).put(file)
    
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            (error) => {
                setError(error)
            },
            () => {
                storage
                .ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url => {
                    db.collection('photos').add({
                        url: url,
                        createdAt: timeStamp
                    })
                    setUrl(url)
                })
            }
        )
    }, [file])

    return {progress, url, error}
}

export default useStorage
