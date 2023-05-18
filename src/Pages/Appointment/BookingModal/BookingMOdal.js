import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingMOdal = ({ treatment, selectedDate, setTreatment }) => {
  const { name: treatmentName, slots } = treatment;
  const { user } = useContext(AuthContext)
  const date = format(selectedDate, 'PP')

  const handleBooking = event => {
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    }
    fetch('http://localhost:5000/bookings', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => { console.log(data) })
    toast.success('booking confirmed')
    setTreatment(null)
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
            <input type="text" disabled value={date} className="input w-full input-bordered " />
            <select name='slot' className="select select-bordered w-full ">

              {
                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
              }
            </select>
            <input name='name' type="text" defaultValue={user?.name} disabled placeholder="your name" className="input w-full input-bordered " />
            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email addres " className="input w-full input-bordered " />
            <input name='phone' type="text" placeholder="phone " className="input w-full input-bordered " />
            <br />
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingMOdal;