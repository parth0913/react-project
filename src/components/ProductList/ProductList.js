import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../api/ProductApi';
import { setProducts } from '../../Slice/productSlice';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products);

  // console.log("asdxad",products);
  

  useEffect(() => {
    const getData = async () => {
      const response = await fetchProducts();
      console.log("Fetched products:", response); 
      dispatch(setProducts(response));
    };
    getData();
  }, [dispatch]);

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
