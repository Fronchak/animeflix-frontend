import Avaliation from "../Avaliation";
import './styles.css';

const CardDetails = ({ anime }) => {

  return (
    <div className="card bg-black" id="card-details">
      <img src={ anime.imgUrl } className="card-img-top" alt="some description" />
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-6 pb-4 mb-4 pb-md-0 mb-md-0" id="card-details-first-column">
            <h1 className="card-title">{ anime.name }</h1>
            <p className="card-text"><Avaliation value={ anime.avaliation } /></p>
            <p className="card-text">Ano de lançamento: { anime.lauchYear }</p>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="card-title">Sinopsis</h2>
            <p className="card-text">{ anime.synopsis }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
