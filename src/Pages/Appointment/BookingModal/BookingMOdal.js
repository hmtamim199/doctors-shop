import { format } from 'date-fns';
import React from 'react';

const BookingMOdal = ({ treatment, selectedDate }) => {
  const { name } = treatment;
  const date = format(selectedDate, 'PP')
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className='grid grid-cols-1 gap-6 mt-10'>
            <input type="text" value={date} className="input w-full " />
            <input type="text" placeholder="Type here" className="input w-full " />
            <input type="text" placeholder="Type here" className="input w-full " />
            <input type="text" placeholder="Type here" className="input w-full " />
            <br />
            <label className='btn btn-accent w-full' htmlFor="submit">submit</label>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingMOdal;