import { Component } from "react";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
class App extends Component {

  state = {
    showModal: false,
 }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    const { showModal } = this.state;
    return <div>
      <Searchbar />
      <button onClick={this.toggleModal}>Modal</button>
      { showModal  && <Modal/>}
    </div>;
  }
}
 
export default App;

//KEY = 25287120-bf1334483d346d0412f62d231