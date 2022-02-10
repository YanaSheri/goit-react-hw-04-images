import { Component } from "react";
import s from './Searchbar.module.css';

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
        return ( <header className={s['searchbar']}>
        <form className={s['form']} onSubmit={this.onSubmit}>
            <button type="submit" className={s['button']}>
                <span className={s['button-label']}>Search</span>
            </button>

            <input
                className={s['input']}
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