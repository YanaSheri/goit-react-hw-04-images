import s from './ImageGalleryItem.module.css';



const ImageGalleryItem = ({ images, modalOpen }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className={s["galleryItem"]}>
            <a href="/"
              onClick={() => {
                modalOpen(largeImageURL);
              }}
            >
              <img src={webformatURL} className={s["galleryItemImg"]} alt="" />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;