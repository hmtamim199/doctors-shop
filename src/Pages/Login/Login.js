import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

  const { register, handleSubmit } = useForm()
  const handleLogin = data => {
    console.log(data)
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96' >
        <h2 className='text-xl text-center '>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span>
            </label>
            <input type='email' {...register("email")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span>
            </label>
            <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
            <label className="label"> <span className="label-text">Forget password</span> </label>
            <input className='btn btn-accent w-full' value={Login} type="submit" />
          </div>


        </form>
        <p>new to doctors shop? <Link className='text-primary' to="/singup">Create new account</Link></p>
        <div className="divider w-full">OR</div>
        <button className='btn btn-outline w-full'>CONTUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;