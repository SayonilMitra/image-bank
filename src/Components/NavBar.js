import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ setSearch, setModal }) {
    let navigate = useNavigate()

    function logout() {
        localStorage.removeItem('userId')
        navigate('/')
    }

    return (
        <div className="nav-bar">
            <div className="logo">LOGO</div>
            <div className="search">
                <input onChange={(e) => { setSearch(e.target.value) }} placeholder="search by name" />
            </div>
            <div>
                <button className="add-photo" onClick={(e) => { setModal(true) }}>
                    Add a photo
                </button>
                <button className='log-out' onClick={logout}>
                    Log out
                </button>
            </div>
        </div>
    )
}