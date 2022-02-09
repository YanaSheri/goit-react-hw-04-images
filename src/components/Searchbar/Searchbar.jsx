// import { render } from "@testing-library/react";
import { Component } from "react";

class Searchbar extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    onChange() {
        
    }

    render() {
        return ( <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.onChange}
            />
        </form>
        </header>
        );
    }
    
    
}
 
export default Searchbar;