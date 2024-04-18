import React from 'react';
const SignUp = () => {
    
    return (
      <div className="bg-success d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card cb1 bg-success-subtle border-4 border-black" style={{ '--bs-border-opacity': '.5', width: '30rem' }}>
          <div className="card-body">
            <h1 className="card-title text-center p-2 text-success-emphasis">SIGN UP</h1>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="fname" aria-required="true" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="password" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="lname" aria-required="true" />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="email" placeholder="name@example.com" aria-required="true" />
              </div>
              <div className="col-12">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="dob" aria-required="true" />
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="password" placeholder="**" aria-required="true" />
              </div>
              <div className="col-12">
                <label htmlFor="repassword" className="form-label">Re-enter Password</label>
                <input type="password" className="form-control border border-black" style={{ '--bs-border-opacity': '.5' }} id="repassword" placeholder="**" aria-required="true" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input border-2 border-black" style={{ '--bs-border-opacity': '.5' }} type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <p className="text-center">Already have an account?</p>
              <a class="btn btn-primary mx-10" href="/login" role="button">Login</a>
              <div className="text-center">
                <button type="submit" className="btn btn-success-subtle btn-outline-success btn-lg" data-bs-toggle="button" aria-pressed="true">Sign UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;