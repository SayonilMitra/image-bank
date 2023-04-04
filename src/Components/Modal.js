import './Modal.css'

export default function Modal({ setModal }) {
    return <div className="modal">
        <label>
            Label <br />
            <input />
        </label> <br />
        <label>
            Photo URL <br />
            <input />
        </label><br />
        <div className='modal-btn'>
            <button onClick={(e) => { setModal(false) }} id='modal-cancel'>Cancel</button>
            <button id='modal-add'>Add</button>
        </div>
    </div>
}