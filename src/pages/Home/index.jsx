import { Link } from 'react-router-dom';
import Banner from '../../assets/imgs/main-banner.jpg';
import './styles.css';

const Home = () => {
  return (
    <div className="container-fluid p-0 text-center" id="home-page-container">
      <img src={ Banner } alt="Banner" className="img-fluid mb-5" />
      <p className="fs-4"><Link to="/animes" className="text-white">Click here</Link> to see our animes</p>
    </div>
  );
}

export default Home;

