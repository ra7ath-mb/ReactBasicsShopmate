import React, { useState} from 'react';
import '../App.css';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products");
    const {data : products, loading} = useFetch(url);
  return (
    <section>
        <div className="filter">
            <button  onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button  onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
        </div>
        {   loading && <p>Loading...</p>}
        {products && products.map((product) => (
            <div className='card' key={product.id}>
                <p className='id'>{product.id}</p>
                <p className='name'>{product.name}</p>
                <p className='info'>
                    <span>${product.price}</span>
                    <span className={product.in_stock ? 'instock' : 'unavailable'}>{product.in_stock ? 'In Stock' : 'Unavailable'}</span></p>
            </div>
        ) )}
    </section>
  )
}

export default ProductList