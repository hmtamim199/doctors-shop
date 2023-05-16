import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = data => {
    console.log(data)
    login(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div className='w-96' >
        <h2 className='text-xl text-center '>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span>
            </label>
            <input type='email' name='email' {...register("email")} className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span>
            </label>
            <input type='password' name='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
            <label className="label"> <span className="label-text">Forget password</span> </label>
            <input className='btn btn-accent w-full' value="login" type="submit" />
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