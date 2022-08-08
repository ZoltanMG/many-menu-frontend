import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Recetas from './routes/recetas';
import MiMenu from './routes/miMenu';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MisRecetas from './routes/misRecetas';
import MasRecetas from './routes/masRecetas';
import Receta from './components/receta/Receta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="recetas" element={<Recetas />}>
            <Route path="mis-recetas" element={<MisRecetas />}>
              <Route path=":recetaId" element={<Receta />} />
            </Route>
            <Route path="mas-recetas" element={<MasRecetas />} />
          </Route>
          <Route path="mi-menu" element={<MiMenu />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>La ruta no existe!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
