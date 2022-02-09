const ImageGalleryItem = ({ images, modalOpen }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className="gallery-item">
            <a
              onClick={() => {
                modalOpen(largeImageURL);
              }}
            >
              <img src={webformatURL} alt="" />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;