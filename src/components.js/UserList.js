import React from 'react';
import Table from './Table';

const Userlist = (props) => (
    <>
    <div className="col-md-6 mx-auto">
        <table className="table table-bordered table-striped table-sm">
        <thead className="thead-dark text-center">
            <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Username</th>
            <th>Kota</th>
            </tr>
        </thead>
        <tbody>
        {props.dataApi.map((data) =>
           <Table data={data} />
        )}
        </tbody>
        </table>
    </div>
    </> 
)

export default Userlist;