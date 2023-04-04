export default function ImageItem({ imageItem, search }) {

    return <div>
        {`${imageItem.imageLabel}`.includes(search) &&
            <img src={imageItem.imageUrl} alt={imageItem.imageLabel} width='200' />}
    </div>
}