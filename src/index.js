import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {App} from './App';

import { UserProvider } from './context/UserContext';
import { TarjetasProvider } from './context/TarjetasContext';
// import { ColorPalettesProvider } from './context/ColorPalettesContext';
// import { FavoritesProvider } from './context/FavoritesContext';
// import { FiltersProvider } from './context/FiltersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TarjetasProvider>
        {/* <ColorPalettesProvider>
          <FavoritesProvider>
        <FiltersProvider> */}
                <App /> 
            {/* </FiltersProvider>
          </FavoritesProvider>
        </ColorPalettesProvider> */}
        </TarjetasProvider>
     </UserProvider>
    </BrowserRouter>
  //</React.StrictMode>
);
