import Stars from "../Stars";


const Avaliation = ({ value }) => {
  return (
    <span>
      <Stars avaliation={ value / 2 } /> {value}/10
    </span>
  );
}

export default Avaliation;
