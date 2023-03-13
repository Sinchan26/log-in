import React, {useState} from 'react'
import styles from "./Login.module.css"
import InputControl from '../InputControl/InputControl'
import { Link,useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>Login</h1>
        <InputControl label="Email" placeholder="Enter Email Address"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
        />
        <InputControl label="Password" placeholder="Enter Password"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} >
            Login
          </button>
          <p>
           Don't Have An Account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login