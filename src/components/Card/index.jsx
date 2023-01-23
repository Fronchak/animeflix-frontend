import Avaliation from "../Avaliation";
import './styles.css';

const Card = ({ anime }) => {
  return (
    <div className="card bg-black">
      <img src={ anime.imgUrl } className="card-img-top" alt="some description" />
      <div className="card-body">
        <h5 className="card-title">{ anime.name }</h5>
        <Avaliation className="card-text" value={ anime.avaliation } />
      </div>
    </div>
  );
}

export default Card;
