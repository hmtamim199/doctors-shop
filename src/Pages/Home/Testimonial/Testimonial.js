import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

  const reviewData = [
    {
      _id: 1,
      name: 'Winson Herry',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      location: 'dhaka, bangladesh'

    },
    {
      _id: 2,
      name: 'Winson Herry',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      location: 'dhaka, bangladesh'

    },
    {
      _id: 3,
      name: 'Winson Herry',
      review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      location: 'dhaka, bangladesh'

    },
  ]


  return (
    <section className='my-16'>
      <div className='flex justify-between '>
        <div>
          <h3 className='text-xl font-bold text-primary'>testimonial</h3>
          <p className='text-4xl '>What Our Patients Says</p>
        </div>
        <div>
          <figure>
            <img className='lg:w-48' src={quote} alt="" />
          </figure>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {reviewData.map(review => <Review
          key={review._id}
          review={review}
        ></Review>)}
      </div>
    </section>
  );
};

export default Testimonial;