import { useState } from "react";
import s from './Searchbar.module.css';

const Searchbar = ({changeInput}) => {

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) {
            return
        }
        changeInput(inputValue);
    }

    const onChange = (e) => {
        const inputValueTrim = (e.currentTarget.value).trim().toLowerCase();
        setInputValue(inputValueTrim);
    }

    return ( <header className={s['searchbar']}>
    <form className={s['form']} onSubmit={onSubmit}>
        <button type="submit" className={s['button']}>
            <span className={s['button-label']}>Search</span>
        </button>

        <input
            className={s['input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
        />
    </form>
    </header>
    );
}
 
export default Searchbar;