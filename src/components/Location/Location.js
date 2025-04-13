import React, { useState, useRef } from "react";
import styles from "./Location.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import LocationModal from "./LocationModal";
import { HiOutlineLocationMarker } from "react-icons/hi";

const LocationButton = () => {
  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleClick = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowModal(true);
  };

  return (
    <>
      <div className={styles.locationButton} onClick={handleClick} ref={buttonRef}>
        <HiOutlineLocationMarker  className={styles.icon} />
        <div>
          <div className={styles.city}>Delhi</div>
          <div className={styles.address}>New Delhi, Delhi, 110063</div>
        </div>
        <RiArrowDownSLine className={styles.arrow} />
      </div>

      {showModal && (
        <LocationModal
          position={position}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default LocationButton;























// import React from 'react'
// import './Location.css'

// export default function Location() {
//   return (
//     <div>
//         <div className="Parent-Container p-4">
//             <div className="flex">
//                 <img src="https://beta.fnp.com/icons/location-Icon.svg" alt="Location Pin" class="w-10 h-10"/>
//             <div className='slector'>
//                 <h2>Delhi</h2>
//                 <p>New Delhi, Delhi, 110063</p>
//             </div>
//             </div>
//         </div>
//     </div>
//   );
// }
