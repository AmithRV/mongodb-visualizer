import React, { useContext, useEffect, useState } from 'react';

import Layout from '../../../common/components/layouts/Layout';
import Store from '../../../common/store/store/store';
import DataTableComponents from '../../../common/components/dataTable/index';
import { getcollectionDetails } from '../../../common/helpers/requests/requests';

function Home() {

    const [collectionDetails, setCollectionDetails] = useState([]);

    const store = useContext(Store);

    const column = [
        {
            name: '',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Title',
            selector: row => row.name,
        },
    ]

    useEffect(() => {
        if (store.collectionName && store.databaseName) {
            getcollectionDetails(store.collectionName, store.databaseName, setCollectionDetails)
        }
    }, [store.collectionName, store.databaseName])

    return (
        <Layout>
            <div className='details-wrap'>
                <div className='details-header'>
                    <span>
                        collectionName : 
                        <span style={{ color: 'red' }}>{store.collectionName}</span>
                    </span>
                    <span>
                        databaseName : 
                        <span style={{ color: 'red' }}>{store.databaseName}</span>
                    </span>
                </div>
                <DataTableComponents
                    columns={column}
                    data={collectionDetails}
                />
            </div>
        </Layout>
    )
}

export default Home