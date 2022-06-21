import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import { Home } from './pages/Home'
import "./App.scss";
import { PortalCfdi } from 'pages/PortalCfdi';
import { PortalNomina } from 'pages/PortalNomina';
import { ComplementosCfdi } from 'pages/ComplementosCfdi';
import { AdendasCfdi } from 'pages/AdendasCfdi';
import { Convertidor } from 'pages/Convertidor';
import { PoliticaPrivacidad } from 'pages/PoliticaPrivacidad';
import { TerminosYCondiciones } from 'pages/TerminosYCondiciones';
import { Precios } from 'pages/Precios';
import { Contacto } from 'pages/Contacto';
import { PlanesTimbrado } from 'pages/PlanesTimbrado';
import { Distribuidores } from 'pages/Distribuidores';

TagManager.initialize({ gtmId: 'GTM-MZ2ZVDV' })
ReactGA.initialize('UA-223081313-1', { debug: false });

function App() {

  
 
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
 
  return (
    <>
      <Router>
        <div className="container">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/cfdi-portal" element={<PortalCfdi />} />
          <Route path="/nomina-portal" element={<PortalNomina />} />
          <Route path="/complementos" element={<ComplementosCfdi />} />
          <Route path="/adendas" element={<AdendasCfdi />} />
          <Route path="/convertidor" element={<Convertidor />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosYCondiciones />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/planes-timbrado" element={<PlanesTimbrado />} />
          <Route path="/distribuidores" element={<Distribuidores />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes >
        </div>
      </Router>
      </>
  );
}


export default App;

/*



function MyVerticallyCenteredExito(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <div className="container headerExito">
          <div className="row justify-content-center">
            <div className="col-md-9 padingExito">
              <div className="row ">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                  <div className="row text-start">
                    <h1 className="text-success pt-2 text-success titleExito">
                      Gracias por contactarnos
                    </h1>
                    <p className="font-weight-normal text-light">
                      Su mensaje ha sido enviado con éxito.

                    </p>
                    <p className="font-weight-normal text-light">

                      En breve uno de nuestros ejecutivos atenderá a su solicitud.
                    </p>
                    <p className="font-weight-normal text-light">
                      Gracias por su preferencia
                    </p>

                  </div>
                  <div className="row ">
                    <div className="col text-center d-flex justify-content-center align-items-center">
                      <a className="mbtn-sm  m-0" onClick={props.onHide} ><span className="mb-0 mbtnSpanBlack">Cerrar</span></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                </div>
              </div>

            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal >
  );
} */
//#endregion
