import { Component } from "react";

class Searchbar extends Component {
    state = {
        inputValue: "",
    }

    onSubmit = (e) => {
        e.preventDefault();
        const inputValue = this.state.inputValue;
        if (!inputValue) {
            return
        }
        this.props.changeInput(inputValue);
    }

    onChange = (e) => {
        const inputValue = (e.currentTarget.value).trim().toLowerCase();
        console.log(inputValue);
        this.setState({ inputValue: inputValue })
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