import s from './Button.module.css';
;


const Button = ({ clickBtnLoadMore }) => {
  return (
    <button className={s['buttonLoadMore']} type="button" onClick={clickBtnLoadMore}>
      Load more
    </button>
  );
};

export default Button;