import './styles.css';

const Star = ({ value }) => {
  if (value < 0.5) {
    return <i className="bi bi-star"></i>;
  }
  if (value < 1.0) {
    return <i className="bi bi-star-half"></i>;
  }
  return <i className="bi bi-star-fill"></i>;
}

export default Star;
