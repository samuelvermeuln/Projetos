import React from 'react';
import Layout from './components/layout';
// import ServerList from './components/ServerList';
import CreateGlobalStyle from '../Chat/styles/GlobalStyles';
import Header from '../Header';

export function ChatCustomization () {
    return(
        <>
            <Header TitlePagina='(1) CHAT' />
            <Layout  />
            <CreateGlobalStyle/>
        </>
    )
}