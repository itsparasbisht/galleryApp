import React, {useState, useEffect} from 'react'
import { db } from '../firebase'

function UseFirestore(collection) {
    const[docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = db.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
            let documents = []
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [collection])

    return {docs}
}

export default UseFirestore
