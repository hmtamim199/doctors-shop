import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Singup = () => {

  const { register, handleSubmit } = useForm()
  const { createUser, updateUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSingup = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast('user created succesfully')
        const authInfo = {
          displayName: data.name
        }
        updateUser(authInfo)
          .then(() => { })
        navigate('/')
          .catch(error => console.log(error))
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96' >
        <h2 className='text-xl text-center '>singup</h2>
        <form onSubmit={handleSubmit(handleSingup)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Name</span>
            </label>
            <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span>
            </label>
            <input type='email' {...register("email")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span>
            </label>
            <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />

            <input className='btn btn-accent w-full' value="singup" type="submit" />
          </div>


        </form>
        <p>allready have an account? <Link className='text-primary' to="/singup">login</Link></p>
        <div className="divider w-full">OR</div>
        <button className='btn btn-outline w-full'>CONTUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Singup;