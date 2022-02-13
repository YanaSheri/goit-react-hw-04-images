import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";
import getImages from '../../MainFetch/MainFetch';
import Button from "../Button/Button";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
// import "../styles.css";
import s from  './App.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

const App = () => {

  const [keyWord, setKeyWord] = useState("city");
  const [showModal, setShowModal] = useState(false);
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [largeImageURL, setLargeImageURL] = useState("");

  useEffect(() => {
    if (!keyWord) {
      getImages(keyWord, page).then(data => {
      // console.log('data :>> ', data);
      setHits([...data.hits])
      });
    } else {
      getImages(keyWord, page)
      .then(data => {
        if (!data.hits.length) {
          setStatus(Status.REJECTED);
          return;
        }
        console.log('data :>> ', data);
        console.log('data.hits :>> ', data.hits);
        setHits(prev => page > 1 ? [...prev, ...data.hits] : data.hits);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
    }

    // setStatus(Status.PENDING);
    
  }, [keyWord, page]);

  // const componentDidMount = () => {
  //   getImages(keyWord, page).then(data =>
  //     setHits([...data.hits] )
  //   );
  // }

  // const componentDidUpdate = (prevProps, prevState) => {
  //   if (
  //     prevState.keyWord !== keyWord ||
  //     prevState.page !== page
  //   ) {
  //     setStatus(Status.PENDING);
  //     getImages(keyWord, page)
  //       .then(data => {
  //         if (!data.hits.length) {
  //           setStatus(Status.REJECTED);
  //           return;
  //         }
  //         setHits(prev => page > 1 ? [...prev, ...data.hits] : data.hits);
  //         setStatus(Status.RESOLVED);
  //       })
  //       .catch(error => {
  //         setError(error);
  //         setStatus(Status.REJECTED);
  //       })
  //   }
  // }
  
  const changeInput = (inputValue) => {
    setKeyWord(inputValue);
    setHits([]);
    setPage(1);
    console.log(status);
  }

  const clickBtnLoadMore = () => {
    setPage(prev => prev + 1);
    setStatus(Status.RESOLVED);
  };

  const toggleModal = () => {
    // setShowModal(({showModal}) => !showModal)
    setShowModal(!showModal)
  }

  const modalOpen = url => {
    setLargeImageURL( url );
    toggleModal();
  };

  return ( <>
    <Searchbar changeInput={ changeInput }/>
    {status === 'idle' ? <div>Введите запрос ... </div> : null}
    {status === 'rejected' ? <div> Нет ответа по запросу</div> : null}
    {status === 'pending' && <Loader />}

    <>
      <ImageGallery images={hits} modalOpen={modalOpen} />
      <Button clickBtnLoadMore={clickBtnLoadMore} />
      {showModal && (
        <Modal onClose={toggleModal}>
            <img src={largeImageURL} className={s["modalImg"]} onClick={toggleModal} alt="" />
        </Modal>
      )}
    </>
  </>)
}
 
  export default App;
