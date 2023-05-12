import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <header 
    style={{}}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker

              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}

            ></DayPicker>

            <p>you have selected {format(selectedDate, 'PP')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;