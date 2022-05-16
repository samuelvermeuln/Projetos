import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';

import { API } from '../Services/ApiGraphql/Api';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

const GetQueryConsult = gql`
    query{
        characters(page: 1){
            info{
                count
                pages
                prev
                next
            }
            results{
                id
                name
                status
                image         
                species
                gender
                episode{
                    name
                }
                origin{
                    name
                }
                location{
                    name
                }
            }
        }
    }
`

const Filtros = gql`
    query characters($status: String)  {
        characters(page: 1,filter: { status: $status }){
            info{
                count
                pages
                prev
                next
            }
            results{
                id
                name
                status
                image         
                species
                gender
                episode{
                    name
                }
                origin{
                    name
                }
                location{
                    name
                }
            }
        }
    }
`;


const RickMory: React.FC<any> = ({ setTitlePagina }) => {
    const [status, setStatus] = useState("");
    const { loading: mutationLoading, error: mutationError, data:mutationData } = useQuery(Filtros, {
        variables: { status: status },
      });
    const { loading, error, data, refetch, networkStatus } = useQuery(GetQueryConsult);
    const [products, setProducts] = useState<any>(null);
    const [layout, setLayout] = useState<any>('grid');
    const [sortKey, setSortKey] = useState<any>(null);
    const [sortOrder, setSortOrder] = useState<any>(null);
    const [sortField, setSortField] = useState<any>(null);
    let sortOptions: any[] | undefined = [
        {label: 'Alive',value:'Alive'},
        {label: 'unknown',value:'unknown'},
        {label: 'Dead',value:'Dead'},
        {label: 'Human',value:'Human'}
    ];

    useEffect(() => {
        setTitlePagina('Rick & Morty ');
        
        (async () => {
            const users = await data?.characters?.results;
            setProducts(users);
        })();


    }, [loading])

    useEffect(() => {        
       async function get () {
            const users = await mutationData?.characters?.results;
            setProducts(users);
       }
       get();
     }, [mutationData])

    const onSortChange = async (event: any) => {
        var values = (event.target.value).toString();
        setStatus(values);
    }   

    const renderListItem = (data: any) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={`images/product/${data.image}`} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description ?? 'description'}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category ?? 'categoria'}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price ?? 'preço'}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus ?? 'status'}</span>
                    </div>
                </div>
            </div>
        );
    }


    const renderGridItem = (data: any) => {
        function TrataString(string: string) {
            if (string?.length > 8) {
                return string.slice(0, 9).concat('...');
            } else {
                return string;
            }
        }

        return (
            <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            {/* <i className="pi pi-tag pi-exclamation-triangle"></i> */}
                            <span className="product-category">{data.status === 'unknown' ? 'Desconhecido' : data.status}</span>
                        </div>
                        <span className='product-badge' title={data?.location?.name} >Localização: {TrataString(data?.location?.name) ?? 'status'}</span>
                    </div>
                    <div className="product-grid-item-content">
                        <img src={data.image} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <span className="product-category">{data.origin.name}</span>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">{data.species}</span>
                        <Button icon="pi pi-search" label="Mais informações" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product: any, layout: any) => {
        if (!product) {
            return;
        }
        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown   options={sortOptions} value={sortKey} optionLabel="label" placeholder="Escolha a especie" onChange={onSortChange} />
                </div>
            </div>
        );
    }

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={products} layout={layout} header={renderHeader()}
                    itemTemplate={itemTemplate} paginator rows={9}
                    sortOrder={sortOrder} sortField={sortField} 
                    loading={loading || mutationLoading}
                    />
            </div>
        </div>
    );
}

export default RickMory;