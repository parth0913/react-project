import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = ({ onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0);
    const [SelectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDay(new Date(year, month, 1).getDay());
    }, [currentDate]);

    const dayNames = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];

    const PrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const NextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
        onDateSelect(day);
    };

    return (
        <div className='Calendar'>
            <div className='header'>
                <button onClick={PrevMonth}>&lt;</button>
                <span>
                    {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                </span>
                <button onClick={NextMonth}>&gt;</button>
            </div>
            <div className='day-names'>
                {dayNames.map((day) => (
                    <div key={day} className='day-name'>{day}</div>
                ))}
            </div>
            <div className='days'>
                {Array.from({ length: startDay }).map((_, index) => (
                    <div key={index} className='empty-day'></div>
                ))}
                {daysInMonth.map((day) => (
                    <div
                        key={day}
                        className={`day ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'today' : ''}
                        ${SelectedDate && day.toDateString() === SelectedDate.toDateString() ? 'selected' : ''}`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
