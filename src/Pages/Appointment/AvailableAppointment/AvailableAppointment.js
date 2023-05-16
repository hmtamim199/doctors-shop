import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingMOdal from '../BookingModal/BookingMOdal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ selectedDate }) => {
  // const [appointmentOption, setAppointmentOption] = useState([])
  const [treatment, setTreatment] = useState(null)

  const { data: appointmentOption = [] } = useQuery({
    queryKey: ('appointmentOption'),
    queryFn: () => fetch('http://localhost:5000/appointmentOption')
      .then(res => res.json())
  })

  // useEffect(() => {
  //   fetch('http://localhost:5000/appointmentOption')
  //     .then(res => res.json())
  //     .then(data => setAppointmentOption(data))
  // }, [])
  return (
    <section className='mt-10'>
      <p className='text-xl font-bold text-secondary text-center'>Available Services on {format(selectedDate, 'PP')}</p>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          appointmentOption.map(option => <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>)
        }
        {
          treatment &&
          <BookingMOdal
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
          ></BookingMOdal>}
      </div>
    </section>
  );
};

export default AvailableAppointment;