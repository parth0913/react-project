import styles from './PDP.module.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import DropDownBar from '../components/DropDownBar/DropDownBar';
import Breadcrumbs from '../components/BreadCrumb/BreadCrumb';
import Offers from '../components/Offers/Offers';
import Accordion from '../components/Accordion/Accordion';
import Location from '../components/Location/Location';
import CustomerReviews from '../components/Comment/CustomerReviews';
import Widgets from '../components/Widgets/Widgets';
// import { FaShoppingCart } from "react-icons/fa";
// import { MdKeyboardArrowRight } from "react-icons/md";
import CalendarModal from '../components/CalendarModal/CalendarModal';

export default function PDP({ product }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCombo, setSelectedCombo] = useState(null);
    const [isStickyActive, setIsStickyActive] = useState(true);
    const descRef = useRef(null);

    useEffect(() => {
        if (product?.images?.length) {
            setSelectedImage(product.images[0]);
        }

        if (product?.combos && product.combos.length > 0) {
            setSelectedCombo(product.combos[0]);
        } else {
            setSelectedCombo(null);
        }
    }, [product]);

    useEffect(() => {
        const currentRef = descRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsStickyActive(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    return (
        <>
            <Navbar />
            <hr />
            <DropDownBar />
            <hr />
            <div className={styles.topCont}>
                <Breadcrumbs />
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={`${styles.galleryWrapper} ${!isStickyActive ? styles.unsticky : ''}`}>
                            <div className={styles.thumbnails}>
                                {product?.images?.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className={selectedImage === img ? styles.selectedThumb : styles.thumb}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                            <div className={styles.mainImageWrapper}>
                                <img src={selectedImage} alt={product?.name} className={styles.mainImage} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right} ref={descRef}>
                        <h1>{product?.name}</h1>

                        {selectedCombo ? (
                            <p className={styles.price}>
                                ₹{selectedCombo.price}{' '}
                                <span className={styles.oldPrice}>₹{selectedCombo.oldPrice}</span>{' '}
                                <span className={styles.discount}>{selectedCombo.discount}% Off</span>
                            </p>
                        ) : (
                            <p className={styles.price}>₹{product?.price}</p>
                        )}

                        <div className={styles.rating}>
                            ⭐ {product?.rating} | {product?.totalReviews || 0} Reviews
                        </div>

                        <div className={styles.Slot}>
                            <label>Gift Receiver's Location</label>
                            <div className={styles.locationBox}>
                                <div className={styles.selectWrapper} style={{ position: 'relative' }}>
                                    <Location variant="iso" />
                                    <Location compact={true} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Pin code, City"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.Slot}>
                            <label>Select Delivery Date & Time Slot</label>

                            {/* <button className={styles.loc}> */}
                            <CalendarModal/>
                                {/* <div className={styles.locConent}>
                                <span className={styles.icon}><img src='https://www.fnp.com/icons/calender-icon.svg' alt='img'></img></span>
                                <span className={styles.text}>Select Delivery Date & Time Slot</span>
                                <span className={styles.locArrow}><MdKeyboardArrowRight /></span>
                                </div> */}
                            {/* </button> */}

                        </div>
                        <div className={styles.Slot}>
                            <label>Offers Available</label>
                            <Offers />
                        </div>

                        <div className={styles.Slot}>
                            <label>About the product</label>
                            <Accordion />
                        </div>
                        <div className={`${styles.ButtonsWrapper} ${!isStickyActive ? styles.unsticky : ''}`}>
                            <div className={styles.buttons}>
                                <button className={styles.addToCart}>Add To Cart</button>
                                <button className={styles.buyNow}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Extras}>
                <div>
                    <CustomerReviews />
                </div>

                <div className={styles.widgets}>
                    <h2 className={styles.widgetsHeading}>You May Also Like</h2>
                    <Widgets />
                </div>
                <div className={styles.widgets}>
                    <h2 className={styles.widgetsHeading}>Recently Viewed By You</h2>
                    <Widgets />
                </div>
                <div className={styles.widgets}>
                    <h2 className={styles.widgetsHeading}>What Others Are Viewing</h2>
                    <Widgets />
                </div>
            </div>
        </>
    );
}
