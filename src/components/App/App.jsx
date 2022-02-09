import { Component } from "react";
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

class App extends Component {

  state = {
    keyWord: "city",
    showModal: false,
    hits: [],
    page: 1,
    error: null,
    status: Status.IDLE,
    largeImageURL: "",
  }

  componentDidMount() {
    getImages(this.state.keyWord, this.state.page).then(data =>
      this.setState({ hits: [...data.hits] })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.keyWord !== this.state.keyWord ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: Status.PENDING });
      getImages(this.state.keyWord, this.state.page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({ status: Status.REJECTED });
            return;
          }
          this.setState(prev => ({
            hits:
              this.state.page > 1 ? [...prev.hits, ...data.hits] : data.hits,
            status: Status.RESOLVED,
          }));
        })

        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  
  changeInput = (inputValue) => {
    this.setState({keyWord: inputValue})
  }

  clickBtnLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
      status: Status.RESOLVED,
    }));
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  modalOpen = url => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
  };


  render() {
    const { hits, status, showModal, largeImageURL } = this.state;
    return ( <>
      <Searchbar changeInput={ this.changeInput }/>
      {status === 'idle' ? <div>Введите запрос ... </div> : null}
      {status === 'rejected' ? <div> Нет ответа по запросу</div> : null}
      {status === 'pending' && <Loader />}

      <>
        <ImageGallery images={hits} modalOpen={this.modalOpen} />
        <Button clickBtnLoadMore={this.clickBtnLoadMore} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} className={s["modalImg"]} onClick={this.toggleModal} alt="" />
          </Modal>
        )}
      </>
    </>)
  }
}
 
export default App;

//KEY = 25287120-bf1334483d346d0412f62d231