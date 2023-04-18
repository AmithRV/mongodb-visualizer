import React, { useEffect, useState } from 'react';

import Header from '../../components/navbars/Header';
import Sidebar from '../../components/navbars/Sidebar';
import axios from '../../helpers/axios/axios';

function Layout({ children }) {

    const [display, setDisplay] = useState(true);
    const [databaseList, setDatabaseList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [loader, setLoader] = useState(false);

    const changeVisibility = () => {
        setDisplay(!display)
    }

    useEffect(() => {
        setLoader(true);
        axios.get('/home')
            .then((response) => {
                setDatabaseList(response?.data);
                setLoader(false);
            })
    }, [refresh])

    return (
        <div>
            <Header changeVisibility={changeVisibility} />

            <div className='layout-wrap'>
                {
                    display && <Sidebar
                        databaseList={databaseList}
                        refresh={() => { setRefresh(!refresh) }}
                        loader={loader}
                    />
                }
                {children}
            </div>
        </div>
    )
}

export default Layout