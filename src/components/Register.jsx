import { authRequest } from './../http/authRequest';

export default function Register({ changeState }) {
    const data = authRequest.post('/api/auth/registration', {
        username: 'test',
        email: 'test',
        password: 'test'
    })
    console.log(data)


    return (
        <div className="w-50 p-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                    <input type="password" required="true" className="form-control" id="exampleInputPassword1" />
                </div>
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
                <button onClick={() => changeState('login')} className="btn btn-light">Sign in</button>
            </form>
        </div>
    )
}
