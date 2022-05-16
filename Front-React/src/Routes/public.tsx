import React, { useEffect } from 'react';
import { ChatCustomization } from '../Chat';
import RickMory from '../RickMory';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


  const API = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });


const RoutaPublica: React.FC<any> = ({setTitlePagina}) => {

    return (
        <>
            {/* <ChatCustomization/> */}
            <ApolloProvider client={API}>
                <RickMory setTitlePagina={setTitlePagina}/>
            </ApolloProvider>
        </>
    )
}

export default RoutaPublica;