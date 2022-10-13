import { useContext } from 'react';
import './Home.css';
import Listado from '../../components/Listado/Listado';
import { TarjetasContext } from '../../context/TarjetasContext';
// import { FavoritesContext } from '../../context/FavoritesContext';
// import { FiltersContext } from '../../context/FiltersContext';

const Home = () => {
  const { tarjetas } = useContext(TarjetasContext);

//   const { favorites } = useContext(FavoritesContext);
//   const { filters } = useContext(FiltersContext);

//   const filteredColorPalettes = colorPalettes.filter((colorPalette) => {
//     //si no hay filtro por tag entonces devolver todos
//     if (filters.tagFilter.length === 0) {
//       return true;
//     }
//     const verifiedTags = colorPalette.tags.filter((tag) =>
//       filters.tagFilter.includes(tag)
//     );
//     return verifiedTags.length === filters.tagFilter.length;
//   });
//   const colorPaletteWithLikes = filteredColorPalettes.map((palette) => {
//     const foundIndex = favorites.findIndex((fav) => fav.id === palette.id);
//     //la paleta no esta marcada como favorita, entonces se la devuelve sin cambios
//     if (foundIndex === -1) {
//       return palette;
//     }
//     return { ...palette, liked: true };
//   });

  return (
    <>
      <div className='main-container'>
        <Listado tarjetas={tarjetas} />
      </div>
    </>
  );
};

export default Home;
