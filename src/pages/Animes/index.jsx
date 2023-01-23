import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import Card from "../../components/Card";
import { BASE_URL } from '../../util/constants';

export const loader = async() => {
  const result = await axios.get(`${BASE_URL}/animes`);
  const animes = result.data;
  return { animes };
}

const Animes = () => {
  const { animes } = useLoaderData();
  console.log(animes);
  console.log(animes);

  const cards = animes.content.map((anime) => convertDefaultCardToContainerCard(anime));

  return (
    <div className="container" id="animes-page-container">
      <div className="row">
        <div className="col-12">
          <h1 className="my-4">See Our Animes</h1>
        </div>
        <div className="col-12 mb-5">
          <form>
            <div className="row">
              <div className="col-10">
                <input type="search" id="filter" name="filter" className="form-control" placeholder="Escreve o que está produrando"></input>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-light w-100">Search</button>
              </div>
            </div>
          </form>
        </div>
        { cards }
      </div>
    </div>
  );
}

function convertDefaultCardToContainerCard(anime) {
  return (
    <Link className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={ anime.id } to={`/animes/${anime.id}`}>
      <Card anime={ anime } />
    </Link>
  )
}

export default Animes;
