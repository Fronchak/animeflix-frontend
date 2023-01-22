

const Card = ({ anime }) => {
  return (
    <div className="card bg-black">
      <img src={ anime.imgUrl } className="card-img-top" alt="some description" />
      <div className="card-body">
        <h5 className="card-title">{ anime.name }</h5>
        <p className="card-text">Nota: {anime.avaliation}/10</p>
      </div>
    </div>
  );
}

export default Card;
