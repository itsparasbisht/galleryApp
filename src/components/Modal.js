import React from 'react'
import './Modal.css'
import {motion} from 'framer-motion'
import { db } from '../firebase'

function Modal({selectedImg, setSelectedImg}) {
    const handleClick = (e) => {
        if(e.target.classList.contains('modal')){
            setSelectedImg(null)
        }
    }

    const handleDelete = (e) => {
        if(window.confirm('sure to delete')){
            db.collection('photos').doc(selectedImg.id).delete()
            setSelectedImg(null)
        }
    }

    return (
        <div className="modal" onClick={handleClick}>
            <motion.img src={selectedImg.src} alt="selected image" 
                initial={{y: "-100vh"}}
                animate={{y: 0}}
            />
            <img className="delete" src="icons/delete.svg" alt="delete icon"
                onClick={handleDelete}
            />
        </div>
    )
}

export default Modal
