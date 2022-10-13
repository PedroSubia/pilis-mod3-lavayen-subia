import { createContext, useState } from "react";

export const TarjetasContext = createContext({
  tarjetas: [],
  setTarjetas: () => {}
  // colorPalettes: [],
  // setColorPalettes: () => {}
})

export const TarjetasProvider = ({ children }) => {
  const [tarjetas, setTarjetas] = useState([]);
  const value = { tarjetas, setTarjetas };
  // const [colorPalettes, setColorPalettes] = useState([]);
  // const value = { colorPalettes, setColorPalettes };
  return <TarjetasContext.Provider value={value}>{children}</TarjetasContext.Provider>;
}