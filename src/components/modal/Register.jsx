export default function Register({ changeState }) {

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <div className="w-50 p-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                    <input type="password" required={true} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" required={true} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" required={true} className="form-control" id="exampleInputPassword1" />
                </div>

                <button onClick={handleClick} className="btn btn-primary me-4">Submit</button>
                <button onClick={() => changeState('login')} className="btn btn-light">Sign in</button>
            </form>
        </div>
    )
}
