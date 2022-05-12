import React, { useEffect } from 'react';
import { ChatCustomization } from '../Chat';
import RickMory from '../RickMory';



const RoutaPublica: React.FC<any> = ({setTitlePagina}) => {

    return (
        <>
            {/* <ChatCustomization/> */}
            <RickMory setTitlePagina={setTitlePagina}/>
        </>
    )
}

export default RoutaPublica;