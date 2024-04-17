import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './PCCSS/instcoffee.css';

function Usersdetails() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get('http://127.0.0.1:8000/api/instantcoffee')
            .then((response) => {
                setData(response.data.userData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <h1>Instant coffee</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((registered, id) => (
                            <tr key={id}>
                                <td>{registered.product_name}</td>
                                <td>{registered.product_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}

export default Usersdetails;
