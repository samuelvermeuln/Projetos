import React, { useState } from 'react';


import Header from './Header';
import Menu from './Menu';
import RotaPublica from './Routes/public';

function App() {
  const [TitlePagina, setTitlePagina] = useState<any>('');

  return (
    <>
      <Header TitlePagina={TitlePagina}/>
      <Menu/>
      <RotaPublica setTitlePagina={setTitlePagina}/>
    </>
  );
}

export default App;
