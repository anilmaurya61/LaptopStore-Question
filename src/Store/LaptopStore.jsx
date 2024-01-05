import React, { useEffect, useState } from 'react';
import './store.css'
import productsData from './ProductData';

export default function LaptopStore() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productsData)
    }, [productsData])

    return (
        <>
            <h1>Welcome to Laptop Store</h1>
            <h2>Laptop Store</h2>
            <h2>Add Laptop</h2>
            <div className='AddLaptop-container'>
                <div>Name:<input type="text" /></div>
                <div>Price:<input type="text" /></div>
                <div>Brand:<input type="text" /></div>
                <div>Storage:<input type="text" /></div>
                <div>RAM:<input type="text" /></div>
                <div>Processor:<input type="text" /></div>
                <button>Add Laptop</button>
            </div>
            <div className="laptop-list-container">
                <div>Search by Name:<input type="text" /></div>
                <div>Search by Price:<input type="text" /></div>
                <div>Search by Brand:<input type="text" /></div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Storage</th>
                        <th>Ram</th>
                        <th>Processor</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.brand}</td>
                            <td>{product.storage}</td>
                            <td>{product.ram}</td>
                            <td>{product.processor}</td>
                            <td className="action-buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
