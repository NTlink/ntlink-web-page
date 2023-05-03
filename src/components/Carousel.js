const { Component } = require("react");

export class Corousel extends Component {



  render() {
    const carruselPicturesURL = [{ href: '', urlImage: 'CRRSL_cont_01' }, { href: '', urlImage: 'CRRSL_cont_02' }, { href: '', urlImage: 'CRRSL_cont_03' }, { href: '', urlImage: 'CRRSL_cont_04' }, { href: '', urlImage: 'CRRSL_cont_05' }, { href: '', urlImage: 'CRRSL_cont_06' }];

    return (

      <div className="row carro ">
        <div className="col-md-5 m-0 p-0 a-l-2 text-end">

          <img src={require('../assets/img/All/logo.png')} className="img-fluid" alt="NTLINK logo" />

        </div>
        <div className="col-md-7 m-0 p-0 a-r-2 text-start">
          <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">

            <div className="carousel-inner">
              {
                Object.keys(carruselPicturesURL).map((picturesUrl, index) => (
                  index == 0 ?
                    <div key={`${carruselPicturesURL[index].urlImage}-${index}`} className="carousel-item active">
                      <a target="_blank" href={carruselPicturesURL[index].href}><img src={require('../assets/img/All/' + carruselPicturesURL[index].urlImage + '.png')} className="img-fluid" alt="..." /></a>
                    </div>
                    :
                    <div key={`${carruselPicturesURL[index].urlImage}-${index}`} className="carousel-item">
                      <a target="_blank" href={carruselPicturesURL[index].href}><img src={require('../assets/img/All/' + carruselPicturesURL[index].urlImage + '.png')} className="img-fluid" alt="..." /></a>
                    </div>
                ))
              }
            </div>
            <a className="carousel-control-prev flechasCarrusel" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next flechasCarrusel flechaDerecha" href="#carouselExampleControls" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
            </a>
          </div>
        </div>

      </div>
    )
  }
} 