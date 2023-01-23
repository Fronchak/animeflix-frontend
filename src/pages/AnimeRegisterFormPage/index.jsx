import { redirect } from 'react-router-dom';
import axios from 'axios';
import AnimeForm from '../../components/AnimeForm';
import { BASE_URL } from '../../util/constants';

import Image from '../../assets/imgs/cadastro-anime-form.jpg';

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData.get("categories"))
  const anime = Object.fromEntries(formData);
  anime.categories = [1, 2];
  try {
    const result = await axios.post(`${BASE_URL}/animes`, anime);
    console.log('Result:');
    console.log(result);
    return redirect(`/animes/${result.data.id}`);
  }
  catch(e) {
    console.log(e);
    return redirect('/animes/new');
  }
}

const AnimeRegisterFormPage = () => {
  return (
    <div className="container my-3" id="anime-register-form-page-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <AnimeForm />
        </div>
        <div className="col-12 col-lg-6">
          <img src={ Image } alt="" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
}

export default AnimeRegisterFormPage;
