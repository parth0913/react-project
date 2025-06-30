import Accordion from 'react-bootstrap/Accordion';
import styles from './Accordion.module.css';
import { FaCalendarAlt } from "react-icons/fa";
import { PiBookOpenTextBold } from "react-icons/pi";
// import { TbTruckDelivery } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";

function BasicExample() {
    return (
        <div className={styles.accordionWrapper}>
            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0" className={`${styles.accordionItem} ${styles.item0}`}>
                    <Accordion.Header className={styles.accordionHeader}><FaCalendarAlt />Product Description</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        An alluring bouquet of red and pink roses that will put a smile on the receiver's face.
                        <br /> <br />
                        <strong>Product Details:</strong>
                        <ul>
                            <li>5 Red Roses</li>
                            <li>5 Pink Roses</li>
                            <li>White Gypsophila Gypsy Fillers</li>
                            <li>FNP Off White & Light Pink Non Woven Packing</li>
                            <li>One Non-Woven Pink Paper</li>
                            <li>Beautifully Tied with Raffia</li>
                        </ul>
                        <br />
                        Did you know a rose bush can grow quite tall? The tallest ever recorded rose bush stands at over 23 feet (7 meters) tall.
                        <br />
                        Origin: The rose, according to fossil evidence, is 35 million years old. Garden cultivation began around 5,000 years ago.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={`${styles.accordionItem} ${styles.item1}`}>
                    <Accordion.Header className={styles.accordionHeader}><PiBookOpenTextBold />Care Instructions</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        When your flowers arrive:
                        <ul>
                            <li>Cut stems 1-2 inches from the bottom at a 45° angle.</li>
                            <li>Remove leaves below the waterline.</li>
                            <li>Keep away from direct sunlight and heat.</li>
                            <li>Mist daily and enjoy!</li>
                        </ul>
                        <br />
                        <strong>Manufacturer Details:</strong><br />
                        Ferns N Petals Pvt Ltd<br />
                        FNP Estates, Ashram Marg, Sultanpur Mandi Road,<br />
                        Gadaipur, Chhatarpur Farms, New Delhi 110030
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={`${styles.accordionItem} ${styles.item2}`}>
                    <Accordion.Header className={styles.accordionHeader}><FaTruckFast />Delivery Information</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <ul>
                            <li>Images shown are indicative; actual product may vary.</li>
                            <li>Flowers may be delivered in bud, semi-bloomed or full bloom.</li>
                            <li>Delivery time is estimated, based on location and product availability.</li>
                            <li>This product is hand-delivered, not via courier.</li>
                            <li>Substitution may occur due to temporary or regional availability.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default BasicExample;
