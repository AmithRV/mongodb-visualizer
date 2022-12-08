import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar({ databaseList, refresh, loader }) {

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

                {
                    databaseList?.map((data, index) => {
                        return (
                            <Accordion defaultActiveKey="0" key={index}>
                                <Accordion.Item eventKey={index} >
                                    <Accordion.Header>{data?.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="list-group">
                                            <li className="list-group-item" >item</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar