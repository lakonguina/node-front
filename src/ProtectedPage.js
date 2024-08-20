import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedPage = () => {
    const [message, setMessage] = useState('Loading...');
	const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const response = await axios.get('http://localhost:3000/protected', {
                    headers: {
                        Authorization: `${token}` // Include the token in the Authorization header
                    }
                });
				setProducts(response.data.product);
				console.log(response.data);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    setMessage('Forbidden: You do not have access to this resource.');
                } else {
                    setMessage('An error occurred: ' + error.message);
                }
            }
        };

        fetchProtectedData();
    }, []);

    return (
        <div>
            <h2>Protected Page</h2>
            {products?.length > 0 && (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            {product.nom} - ${product.prix} - Quantity: {product.quantite}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProtectedPage;

