import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <section className='mt-10'>
      <p className='text-xl font-bold text-secondary text-center'>Available Services on {format(selectedDate, 'PP')}</p>
    </section>
  );
};

export default AvailableAppointment;