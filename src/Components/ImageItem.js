import './ImageItem.css'
import axios from 'axios'

export default function ImageItem({ imageItem, search, getImages }) {

    const backend = require('../BackEnd/backendLink')

    function deleteImage() {
        axios.delete(`${backend}/delete/${imageItem._id}`)
            .then(res => {
                getImages()
            })
    }

    return <div>
        {`${imageItem.imageLabel}`.includes(search) && <>
            <img src={imageItem.imageUrl} alt={imageItem.imageLabel} width='200' />
            <br />
            {imageItem.imageLabel}
            <button id="image-delete" onClick={deleteImage}>Delete</button>
        </>}
    </div>
}