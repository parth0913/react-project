import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import styles from './ProductsPage.module.css';
import Navbar from '../components/Navbar/Navbar';
import DropDownBar from '../components/DropDownBar/DropDownBar';
import Breadcrumbs from '../components/BreadCrumb/BreadCrumb';
import FilterSection from '../components/FilterSection/FilterSection';

export default function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClearAll = () => {
    navigate(location.pathname);
  };

  return (
    <>
      <Navbar />
      <hr />
      <DropDownBar />
      <hr />
      <div className={styles.topdiv}>
        <Breadcrumbs />
        <div className={styles.container}>
          {/* <div className={styles.filterWrapper}> */}
          <aside className={styles.sidebar}>
            <div className={styles.filterHeader}>
              <h3 className={styles.filterHeading}>Filter</h3>
              {location.search && (
                <button className={styles.clearAllButton} onClick={handleClearAll}>
                  Clear All
                </button>
              )}
            </div>
            <FilterSection title="Price" options={['0-500', '500-1000', 'Above 1000']} queryKey="price" />
            <FilterSection title="Flower Type" options={['Roses', 'Lilies', 'Tulips']} queryKey="type" />
            <FilterSection title="Arrangement" options={['Bouquet', 'Basket', 'Box']} queryKey="arrangement" />
            <FilterSection title="Color" options={['Red', 'Yellow', 'White', 'Pink']} queryKey="color" />
          </aside>
          {/* </div> */}
          <main className={styles.main}>
            <div className={styles.pageHeader}>
              <div className={styles.titleRow}>
                <h1 className={styles.heading}>Happy Birthday Flowers</h1>
                <div className={styles.metaInfo}>
                  <span>13 of 13 Gifts</span>
                  <span className={styles.separator}>|</span>
                  <span>⭐ 4.8</span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.reviewCount}>30381 Reviews</span>
                </div>
              </div>
              <select className={styles.sortDropdown}>
                <option value="recommended">Sort by: Recommended</option>
                <option value="new">Sort by: New</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
            <ProductList />
          </main>
        </div>
      </div>
    </>
  );
}
