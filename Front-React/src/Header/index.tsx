import React from 'react';
import { Helmet } from 'react-helmet';


interface Props {
    TitlePagina?: string;
}

export default function Header({TitlePagina}: Props) {
    return (
        <>
            <Helmet>
                <html lang="pt-BR" />
                <title>{TitlePagina}</title>
                {/* <link rel="apple-touch-icon" href={logo} /> */}
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
                <meta charSet="utf-8" />
            </Helmet>
        </>
    )
}