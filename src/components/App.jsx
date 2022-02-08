import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
class App extends Component {

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() { 
    return <div>
      <Searchbar/>
    </div>;
  }
}
 
export default App;

//KEY = 25287120-bf1334483d346d0412f62d231