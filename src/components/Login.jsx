
export default function Login({ changeState }) {
    return (
        <div className="w-50 p-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" required="true" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                    {/*  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" required="true" className="form-control" id="exampleInputPassword1" />
                </div>
               {/*  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary me-4">Submit</button>
                <button onClick={() => changeState('register')} className="btn btn-light">Register</button>
            </form>
        </div>
    )
}
