import React from 'react';

const LoginSignUp = () => {
  return (
  <div className=' p-4 ' style={{backgroundColor:"#fce3fe"}} >
      <div className="container mt-5 ">
      <div className="row justify-content-center pb-3">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form>
                <div className="form-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group mb-3">
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mb-3">
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-danger btn-block w-100">Continue</button>
                <p className="text-center mt-3">
                  Already have an account? <a href="/login">Login</a>

                </p>
                <p className='text-center '> By countine i agree the terms of privacy policy</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginSignUp;
