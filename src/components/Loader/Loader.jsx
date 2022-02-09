import { Oval } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div
    //   style={{
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'fixed',
    //     backgroundColor: 'rgba(0,0,0,0.5)',
    //   }}
    >
         <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="blue"
            secondaryColor="yellow"
        />
    </div>
  );
};

export default Loader;