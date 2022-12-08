import React from 'react'
import DataTableComponent from '../../components/dataTable';
import Layout from '../../components/layouts/Layout'

function Home() {

    const columns = [
        {
            name: '',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <Layout>
            <DataTableComponent
                columns={columns}
                data={data}
            />
        </Layout>
    )
}

export default Home