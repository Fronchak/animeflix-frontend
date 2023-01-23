import Star from '../Star';
import './styles.css';

const Stars = ({ avaliation }) => {
  return (
    <span className="start">
      <Star value={avaliation} />
      <Star value={avaliation - 1} />
      <Star value={avaliation - 2} />
      <Star value={avaliation - 3} />
      <Star value={avaliation - 4} />
    </span>
  );
}

export default Stars;
