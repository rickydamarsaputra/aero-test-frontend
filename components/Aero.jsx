import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Aero() {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const product = await axios.get('https://dummyjson.com/products');
		setProducts([...product.data.products.slice(0, 3)]);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="container">
			<h1>List of products</h1>
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						{product.title} | $ {product.price} | stock {product.stock}
					</li>
				))}
			</ul>
		</div>
	);
}
