import s from './ImageGalleryItem.module.css';



const ImageGalleryItem = ({ images, modalOpen }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id} className={s["galleryItem"]}>
              <img src={webformatURL} className={s["galleryItemImg"]} onClick={() => {
                modalOpen(largeImageURL);
              }} alt="" />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;