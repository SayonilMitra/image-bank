import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Modal from "./Modal"
import ImageItem from "./ImageItem"
import './DisplayImages.css'
import axios from "axios"

export default function DisplayImages() {

    let [search, setSearch] = useState('')
    let [modal, setModal] = useState(false)
    let [images, setImages] = useState([])
    const backend = require('../BackEnd/backendLink')

    useEffect(() => {
        getImages()
    }, [])

    // back end api call to get all images from database
    function getImages() {
        axios.get(`${backend}/images`)
            .then(res => {
                setImages(res.data)
            })
    }

    return <div className={modal ? 'bg-grey' : 'bg-white'} id="main-page">
        <NavBar setSearch={setSearch} setModal={setModal} modal={modal} />
        {modal && <Modal setModal={setModal} getImages={getImages} />}
        {
            images.map((item, index) => {
                return < ImageItem key={index} imageItem={item} search={search} />
            })
        }
    </div>

}