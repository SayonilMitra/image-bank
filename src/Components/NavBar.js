import './NavBar.css'

export default function NavBar({ setSearch, setModal }) {

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
            </div>
        </div>
    )
}