import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Card from "../../components/Card";

export async function loader() {
  const animes2 = [
    {
      id: 1,
      imgUrl: 'https://www.einerd.com.br/wp-content/uploads/2015/12/DBSgoku.jpg',
      name: 'Dragon ball Super',
      avaliation: 8.9
    },
    {
      id: 2,
      imgUrl: 'https://jpimg.com.br/uploads/2018/04/dragon-ball-z.jpg',
      name: 'Dragon ball Z',
      avaliation: 9.0
    }
  ];
  const result = await axios.get('http://localhost:8080/animes');
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
                <button type="button" className="btn btn-primary w-100">Search</button>
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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={ anime.id }>
      <Card anime={ anime } />
    </div>
  )
}

export default Animes;
