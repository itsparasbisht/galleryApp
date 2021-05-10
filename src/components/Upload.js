import React, {useState} from 'react'
import ProgressBar from './ProgressBar'
import './Upload.css'

function Upload() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
        const selected = e.target.files[0]
        
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError("{ select an image file, png or jpeg }")
        }
    }

    return (
        <div className="upload">
            <form>
                <label htmlFor="add">
                    <img src="icons/add.svg" alt="" />
                    <input type="file" name="add" id="add" onChange={(e) => handleChange(e)} />
                </label>
            </form>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file-name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </div>
    )
}

export default Upload
