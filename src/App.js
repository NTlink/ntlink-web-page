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
import { WebService } from 'pages/WebService';

TagManager.initialize({ gtmId: 'GTM-MZ2ZVDV' })
ReactGA.initialize('UA-223081313-1', { debug: false });

function App() {

  
 
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
 
  return (
    <>
      <Router>
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
          <Route path="/web-service" element={<WebService />} />
        </Routes >
      </Router>
      </>
  );
}

export default App;
