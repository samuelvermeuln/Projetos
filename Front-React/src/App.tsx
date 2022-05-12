import React, { useState } from 'react';

import Header from './Header';
import RoutaPublica from './Routes/public';

function App() {
  const [TitlePagina, setTitlePagina] = useState<any>('');

  console.log(" ==>>",TitlePagina);

  return (
    <>
      <Header TitlePagina={TitlePagina}/>
      <RoutaPublica setTitlePagina={setTitlePagina}/>
    </>
  );
}

export default App;
