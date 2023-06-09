import React from 'react';

const Review = ({ review }) => {
  const { name, location, review: userReview, img } = review
  return (
    <div className="card shadow-xl">
      <div className="card-body">

        <p>{userReview}</p>
        <div className="flex items-center">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='' />
            </div>
          </div>
          <div>
            <h2 className='text-lg'>{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;