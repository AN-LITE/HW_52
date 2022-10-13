const Slide = props => {
    const {isActive, alt, url} = props

    return (
        <div className={isActive ? "carousel-item active" : "carousel-item"}>
            <img
                alt={alt}
                className="rounded mx-auto d-block w-100"
                src={url}
            />
        </div>
    )
}

export default Slide