import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./user";

const Login = () => {
  const [textedit, setTextedit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {!textedit ? (
        <button
          onClick={() => {
            setTextedit(true);
            dispatch(
              login({
                name: "farish",
                age: 2
              })
            );
          }}
        >
          LOGIN
        </button>
      ) : (
        <button
          onClick={() => {
            setTextedit(false);
            dispatch(logout());
          }}
        >
          LOGOUT
        </button>
      )}
    </div>
  );
};

export default Login;
