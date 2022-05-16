import React from 'react';
import { Menubar } from 'primereact/menubar';

export default function Menu() {
    return (
        <div className="card">
            <Menubar start={<h1>Consumindo API GraphQL Rick & Mory</h1>} />
        </div>
    )
}