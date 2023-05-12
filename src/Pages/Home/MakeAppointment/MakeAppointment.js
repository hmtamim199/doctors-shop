import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section className='mt-32'

      style={{
        background: `url(${appointment})`
      }}

    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} alt='' className=" -mt-32 lg:w-1/2 hidden md:block rounded-lg shadow-2xl" />
          <div>
            <h1 className='text-2xl text-primary'>Appointment</h1>
            <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;