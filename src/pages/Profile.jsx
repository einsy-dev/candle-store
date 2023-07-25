import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";


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
