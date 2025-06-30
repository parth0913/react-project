import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Calendar from '../Calendar/Calendar';
import TimeSlot from '../TimeSlot/TimeSlot';
import styles from './CalendarModal.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";

function MyVerticallyCenteredModal({ show, onHide, onDateSelect, onSlotSelect, step, setStep }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            contentClassName={styles.customModalContent}
            dialogClassName={styles.customModalDialog}
            backdropClassName={styles.customBackdrop}
        >
            <div className={styles.modalHeader}>
                <h4>Select Date and Time Slot</h4>
                <button className={styles.closeBtn} onClick={onHide}>×</button>
            </div>
            <div className={styles.modalBody}>
                {step === 'calendar' ? (
                    <Calendar onDateSelect={(date) => {
                        onDateSelect(date);
                        setStep('timeslot');
                    }} />
                ) : (
                    <TimeSlot
                        onSlotSelect={(slot) => {
                            onSlotSelect(slot);
                            onHide(); // close modal
                            setStep('calendar'); // reset step
                        }}
                    />
                )}
            </div>
        </Modal>
    );
}

function CalendarModalTrigger() {
    const [modalShow, setModalShow] = useState(false);
    const [step, setStep] = useState('calendar');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState('');

    const formatDate = (date) =>
        new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);

    return (
        <>
            <button className={styles.triggerButton} onClick={() => setModalShow(true)}>
                <div className={styles.locConent}>
                    <span className={styles.icon}>
                        <img src='https://www.fnp.com/icons/calender-icon.svg' alt='calendar' />
                    </span>
                    <span className={styles.text}>
                        {selectedDate && selectedSlot
                            ? `Date: ${formatDate(selectedDate)} | Slot: ${selectedSlot}`
                            : 'Select Delivery Date & Time Slot'}
                    </span>
                    <span className={styles.locArrow}><MdKeyboardArrowRight /></span>
                </div>
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onDateSelect={setSelectedDate}
                onSlotSelect={setSelectedSlot}
                step={step}
                setStep={setStep}
            />
        </>
    );
}

export default CalendarModalTrigger;
