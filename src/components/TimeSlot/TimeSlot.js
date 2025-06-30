import React, { useState } from 'react';
import styles from './TimeSlot.module.css';

const deliveryOptions = [
  {
    id: 'express',
    type: 'Express Delivery',
    price: 29,
    description: 'Choose from any 4-hour slot during the day',
    slots: ['09:00 - 13:00 Hrs', '13:00 - 17:00 Hrs', '17:00 - 21:00 Hrs', '19:00 - 23:00 Hrs'],
  },
  {
    id: 'fixed',
    type: 'Fixed Time Delivery',
    price: 99,
    description: 'Choose from any 1-hour slot',
    slots: ['14:00 - 15:00 Hrs', '15:00 - 16:00 Hrs'],
  },
  {
    id: 'midnight',
    type: 'Pre-Midnight Delivery',
    price: 249,
    description: 'Gifts will be delivered any time between 11:00 PM - 11:59 PM',
    slots: ['23:00 - 23:59 Hrs'],
  },
  {
    id: 'morning',
    type: 'Morning Delivery',
    price: 200,
    description: 'Your gift is delivered between 07:00 - 09:00 AM',
    slots: ['07:00 - 08:00 Hrs', '09:00 - 10:00 Hrs'],
  },
];

export default function TimeSlot({ onSlotSelect }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotSelect = (slot, option) => {
    setSelectedSlot(slot);
    onSlotSelect(slot);
  };

  return (
    <div className={styles.container}>
      {deliveryOptions.map((option) => (
        <div
          key={option.id}
          className={`${styles.card} ${selectedOption === option.id ? styles.active : ''}`}
        >
          <div
            className={styles.header}
            onClick={() =>
              setSelectedOption(selectedOption === option.id ? '' : option.id)
            }
          >
            <input
              type="radio"
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
            />
            <div className={styles.headerContent}>
              <span className={styles.type}>{option.type}</span>
              <span className={styles.description}>{option.description}</span>
            </div>
            <span className={styles.price}>₹ {option.price}</span>
          </div>

          {selectedOption === option.id && (
            <div className={styles.slotSection}>
              <div className={styles.slotTitle}>Available Time Slots:</div>
              {option.slots.map((slot, idx) => (
                <label key={idx} className={styles.slot}>
                  <input
                    type="radio"
                    name="slot"
                    value={slot}
                    checked={selectedSlot === slot}
                    onChange={() => handleSlotSelect(slot)}
                  />
                  {slot}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
