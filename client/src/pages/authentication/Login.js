import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import makeToast from "../../components/Toaster";
import { POST } from "../../utils/api";

const useStyles = makeStyles((theme) => ({
  
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    color: '#112233',
  }
}));

const Login = (props) => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const classes = useStyles();

  const loginUser = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    POST(
      "user/login",
      { username, password },
      {},
      (response) => {
        makeToast("success", response.data.message);
        localStorage.setItem("CC_Token", response.data.token);
        props.setupSocket();
        props.history.push("/dashboard");
      },
      (err) => {
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      }
    );
  };

  return (
      <div className="authOuterContainer">      
        <div className="authcopyrow">
          <Link to='/'>
            <img src="/logoname.png" alt="Go to Sign"/>
          </Link>
            <p>Pulitzer Ce nter on Crisis Reporting – Fellow/Correspondent. Traveled across Congo for several weeks to
            report on election developments, and to raise awareness of the Congo conflict in US media.  Embedded
            with Moroccan, Pakistani and Uruguayan United Nations peacekeepers in Ituri, Lake Albert and South
            Kivu. Accredited with Ministry of Information and United Nations Mission in Congo (Summer 2006).
            ntary report on the relation between the Congo conflict and the scramble for mineral resources (Fall 2006).
            Aired on PBS’ Foreign Exchange with Fareed Zakaria. Guest appearances on BBC’s World News        
            </p>
        </div>
        <div className="authInnerContainer">
          <div>
            <h3>LOGIN</h3>
            <TextField variant='outlined' margin='normal' required fullWidth id='username' label='Username' name='username' autoComplete='username'
              inputRef={usernameRef} autoFocus style={{color:'#112233'}}/>
            <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Password' type='password' id='password'
              inputRef={passwordRef} autoComplete='current-password'/>
            <p>Don’t have an account?</p>
            {/*<Link to="/register">Sign Up</Link>*/}
          </div>
          <Button fullWidth variant='contained' color='primary' onClick={loginUser} className={classes.submit}>Login</Button>        
        </div>
        
      </div>
  );
};

export default withRouter(Login);
