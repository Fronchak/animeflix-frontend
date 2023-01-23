import axios from "axios";
import { useLoaderData } from 'react-router-dom';
import CardDetails from "../../components/CardDetails"
import { BASE_URL } from "../../util/constants";

export const loader = async ({ params }) => {
  const result = await axios.get(`${BASE_URL}/animes/${params.id}`);
  const anime = result.data;
  return { anime };
}

const CardDetailsPage = () => {
  const { anime } = useLoaderData();

  return (
    <div className="container mt-4">
      <CardDetails anime={anime} />
    </div>
  );
}

export default CardDetailsPage;
