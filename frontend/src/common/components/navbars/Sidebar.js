import React, { useContext, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import Store from '../../store/store/store';
import { getCollections } from '../../helpers/requests/requests';

function Sidebar({ databaseList, refresh, loader }) {

    const store = useContext(Store);

    const [collections, setCollections] = useState([]);
    const [collectionsLoader, setCollectionsLoader] = useState(false);

    return (
        <div className='sidebar-wrap'>
            <div className='sidebar'>
                <div className="refresh-wrap" >
                    <svg onClick={() => { refresh() }} xmlns="http://www.w3.org/2000/svg" className="refresh icon icon-tabler icon-tabler-refresh" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    </svg>
                </div>

                <div className='loader-wrap'>
                    {
                        loader && <span className="spinner-border text-muted"></span>
                    }
                </div>

                <Accordion defaultActiveKey="0">
                    {
                        databaseList?.map((data, index) => {
                            return (
                                <Accordion.Item
                                    eventKey={index}
                                    key={index}

                                >
                                    <Accordion.Header
                                        onClick={() => {
                                            store.setDatabaseName(data?.name)
                                            setCollections([]);
                                            getCollections(data?.name, setCollections, setCollectionsLoader)
                                        }}
                                    >
                                        {data?.name}
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <ul className="list-group">
                                            {
                                                (collections?.length > 0 && collectionsLoader === false) ? (
                                                    collections?.map((collection, index) => {
                                                        return (
                                                            <li
                                                                className="list-group-item"
                                                                key={index}
                                                                onClick={() => {
                                                                    store.setCollectionName(collection?.name);
                                                                }}
                                                            >
                                                                {collection?.name}
                                                            </li>
                                                        )
                                                    })
                                                ) : (
                                                    (collections?.length === 0 && collectionsLoader === false) ? (
                                                        <li className="list-group-item"> NO COLLECTIONS AVAILABLE</li>
                                                    ) : (
                                                        <li className="list-group-item">Loading ...</li>
                                                    )
                                                )
                                            }
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default Sidebar