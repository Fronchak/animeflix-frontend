import { Form } from 'react-router-dom';

const AnimeForm = () => {
  return (
    <div className="col-12">
      <Form method='post' className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input type="text" id="name" name="name" placeholder="Escreva o nome do anime" className="form-control"></input>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="lauchYear" className="form-label">Ano de lançamento</label>
              <input type="number" name="lauchYear" id="lauchYear" className="form-control" placeholder="Escreva o ano de lançamento"></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="avaliation" className="form-label">Nota (entre 0 e 10)</label>
              <input type="number" name="avaliation" id="avaliation" className="form-control" placeholder="Escreva a nota do anime" step="0.1"></input>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="imgUrl" className="form-label">Imagem</label>
          <input type="text" id="imgUrl" name="imgUrl" placeholder="Copie o link da imagem aqui" className="form-control"></input>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="synopsis" className="form-label">Synopsis</label>
          <textarea name="synopsis" id="synopsis" placeholder='Uma breve descrição do anime' className="form-control" rows={5}></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input name='categories' className="form-check-input" type="checkbox" value="1" id="checkbox-1" />
            <label className="checkbox-1" htmlFor="flexCheckDefault"> Action</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input name='categories' className="form-check-input" type="checkbox" value="2" id="checkbox-2" />
            <label className="checkbox-2" htmlFor="flexCheckDefault"> Action</label>
          </div>
        </div>
        <div className='col-12 mb-3'>
          <button type="submit" className="btn btn-light">Cadastrar</button>
        </div>
      </Form>
    </div>
  );
}

export default AnimeForm;
