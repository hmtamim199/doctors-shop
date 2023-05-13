import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card text-center shadow-xl my-6">
      <div className="card-body">
        <h2 className="text-2xl text-center font-bold text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setTreatment(option)}
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;