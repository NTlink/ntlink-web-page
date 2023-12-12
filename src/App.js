import React, { Component, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import TagManager from 'react-gtm-module'
import { Home } from './pages/Home'
import "./App.scss";
import { PortalCfdi } from 'pages/PortalCfdi';
import { PortalNomina } from 'pages/PortalNomina';
import { ComplementosCfdi } from 'pages/ComplementosCfdi';
import { AdendasCfdi } from 'pages/AdendasCfdi';
import { Convertidor } from 'pages/Convertidor';
import { AvisoPrivacidad } from 'pages/AvisoPrivacidad';
import { TerminosYCondiciones } from 'pages/TerminosYCondiciones';
import { Precios } from 'pages/Precios';
import { Contacto } from 'pages/Contacto';
import { PlanesTimbrado } from 'pages/PlanesTimbrado';
import { Distribuidores } from 'pages/Distribuidores';
import { WebService } from 'pages/WebService';
import { FreePortal } from 'pages/FreePortal';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

TagManager.initialize({ gtmId: 'AW-10869575825' })


export class App extends Component {

  render() {
    return (
      <>
        <Header />
        <main role="main" id="mainpage">
          <br></br>
          <br></br>
          <div class="container-xxl">
            <Router>
              <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/cfdi-portal" element={<PortalCfdi />} />
                <Route path="/nomina-portal" element={<PortalNomina />} />
                <Route path="/complementos" element={<ComplementosCfdi />} />
                <Route path="/adendas" element={<AdendasCfdi />} />
                <Route path="/convertidor" element={<Convertidor />} />
                <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
                <Route path="/terminos-condiciones" element={<TerminosYCondiciones />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/planes-timbrado" element={<PlanesTimbrado />} />
                <Route path="/distribuidores" element={<Distribuidores />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/web-service" element={<WebService />} />
                <Route path="/ntfacturacion" element={<FreePortal />} />
              </Routes >
            </Router>
          </div>
        </main>
        <Footer />
      </>
    )
  };
}

export default App;
