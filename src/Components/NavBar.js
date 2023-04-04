import './NavBar.css'

export default function NavBar({ setSearch }) {

    return (
        <div className="nav-bar">
            <div className="logo">LOGO</div>
            <div className="search">
                <input onChange={(e) => { setSearch(e.target.value) }} placeholder="search by name" />
            </div>
            <div>
                <button className="add-photo">Add a photo</button>
            </div>
        </div>
    )
}