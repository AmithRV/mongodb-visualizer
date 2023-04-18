import React from 'react'
import DataTable from 'react-data-table-component';

function DataTableComponent({ columns, data }) {
    return (
        <div className='data-table-wrap'>
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default DataTableComponent