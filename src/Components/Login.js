import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { colorChange } from "../Redux/theme";
import { login } from "../Redux/user";

function Login() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  console.log("colorchange", color);
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ name: "KaviShree", age: 4, email: "kavishree@gmail.com" })
          )
        }
      >
        Login
      </button>
      <input type={"text"} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(colorChange(color))}>
        Colour change
      </button>
    </div>
  );
}

export default Login;
