import React from 'react'
import './Grid.css'
import UseFirestore from '../hooks/UseFirestore'
import {motion} from 'framer-motion'

function Grid({setSelectedImg}) {
    const {docs} = UseFirestore('photos')
    
    return (
        <div className="grid">
            { docs && docs.map(doc => (
                <motion.img
                    key={doc.id} src={doc.url} alt="uploaded picture" 
                    onClick={() => {setSelectedImg({src: doc.url, id: doc.id})}}
                />
            ))}
        </div>
    )
}

export default Grid
