import './Modal.css'
import { useState } from 'react'

export default function Modal({ setModal }) {
    let [imageLabel, setLabel] = useState('')
    let [imageUrl, setUrl] = useState('')

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
            <button id='modal-add'>Add</button>
        </div>
    </div>
}