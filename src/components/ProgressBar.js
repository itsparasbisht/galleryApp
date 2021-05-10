import React, {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import './ProgressBar.css'
import {motion} from 'framer-motion'

function ProgressBar({file, setFile}) {
    const {url, progress} = useStorage(file)

    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className="progress">
            <motion.div
                className="bar"
                initial={{width: 0}}
                animate={{width: progress + '%'}}>
            </motion.div>
        </div>
    )
}

export default ProgressBar
