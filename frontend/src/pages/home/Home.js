import React, { useContext, useEffect, useState } from 'react';
import DataTableComponent from '../../components/dataTable';
import Layout from '../../components/layouts/Layout';
import Store from '../../helper/store/store';
import axios from '../../axios/axios';

function Home() {

    const [collectionDetails, setCollectionDetails] = useState([]);

    const store = useContext(Store);

    const getcollectionDetails = (collection_name, database_name) => {
        axios.get(`/getcollection-details`, {
            params: {
                database: database_name,
                collection: collection_name
            }
        })
            .then((response) => {
                console.log("collection_detalis : ", response?.data);
                setCollectionDetails(response?.data);
            })
    }

    useEffect(() => {
        if (store.collectionName && store.databaseName) {
            getcollectionDetails(store.collectionName, store.databaseName)
        }
    }, [store.collectionName, store.databaseName])

    return (
        <Layout>
            <div className='details-wrap'>
                <div className='details-header'>
                    <span>
                        collectionName : <span style={{ color: 'red' }}>{store.collectionName}</span>
                    </span>
                    <span>
                        databaseName : <span style={{ color: 'red' }}>{store.databaseName}</span>
                    </span>
                </div>
                <DataTableComponent
                    columns={[
                        {
                            name: '',
                            selector: (row, index) => index + 1,
                        },
                        {
                            name: 'Title',
                            selector: row => row.name,
                        },
                    ]}
                    data={collectionDetails}
                />
            </div>
        </Layout>
    )
}

export default Home