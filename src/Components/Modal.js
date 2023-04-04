import './Modal.css'
import { useState } from 'react'
import axios from 'axios'

export default function Modal({ setModal, getImages }) {

    let [imageLabel, setLabel] = useState('No Label')
    let [imageUrl, setUrl] = useState('')
    const backend = require('../BackEnd/backendLink')
    let [message, setMessage] = useState('Add')

    async function addImage() {
        setMessage('Uploading...')
        axios.post(`${backend}/add`, {
            imageLabel: imageLabel,
            imageUrl: imageUrl
        }).then(res => {
            setModal(false)
            setMessage('Add')
            getImages()
        })
    }

    return <div className="modal">
        <label>
            Label <br />
            <input onChange={(e) => { setLabel(e.target.value) }} />
        </label> <br />
        <label>
            Photo URL <br />
            <input onChange={(e) => { setUrl(e.target.value) }} />
        </label><br />
        <div className='modal-btn'>
            <button onClick={(e) => { setModal(false) }} id='modal-cancel'>Cancel</button>
            <button id='modal-add' onClick={addImage}>{message}</button>
        </div>
    </div>
}