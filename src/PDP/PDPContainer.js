import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/ProductApi';
import { setProducts } from '../Slice/productSlice';
import PDP from './PDP'; 

export default function PDPContainer() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData.products);
  const [enrichedProduct, setEnrichedProduct] = useState(null);

  useEffect(() => {
    const enrichAndSetProduct = (productsList) => {
      const product = productsList.find((p) => p.id.toString() === productId);
      if (product) {
        const combos = [
          {
            price: product.price,
            oldPrice: product.price + 200,
            discount: 20,
            image: product.images[0],
          },
          {
            price: product.price + 100,
            oldPrice: product.price + 250,
            discount: 15,
            image: product.images[1],
          },
        ];
        setEnrichedProduct({ ...product, combos });
      }
    };

    if (products.length === 0) {
      fetchProducts().then((data) => {
        dispatch(setProducts(data));
        enrichAndSetProduct(data);
      });
    } else {
      enrichAndSetProduct(products);
    }
  }, [dispatch, products, productId]);

  if (!enrichedProduct) return <div>Loading Product...</div>;

  return <PDP product={enrichedProduct} />;
}
