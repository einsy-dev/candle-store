import { useState } from "react";
import Login from "../components/modal/Login";
import Register from "../components/modal/Register";


export default function Profile() {
  const [state, setState] = useState('login');

  return (
    <>
      {state === 'login' && <Login changeState={setState} />}
      {state === 'register' && <Register changeState={setState} />}
      {/* <Login /> */}
    </>
  )
}
