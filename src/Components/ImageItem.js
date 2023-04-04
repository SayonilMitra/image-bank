export default function ImageItem({ imageItem, search }) {

    return <div>
        <img src={imageItem.imageUrl} alt={imageItem.imageLabel} width='200' />
    </div>
}