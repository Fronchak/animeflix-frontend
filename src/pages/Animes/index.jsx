import Card from "../../components/Card";


const Animes = () => {
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
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <Card />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Animes;
