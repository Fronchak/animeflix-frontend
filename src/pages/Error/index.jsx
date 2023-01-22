import { useRouteError } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './styles.css'

const Error = () => {

  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="container" id="error-page-container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
