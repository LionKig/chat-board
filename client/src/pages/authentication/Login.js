import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import makeToast from "../../components/Toaster";
import { POST } from "../../utils/api";
import Copyright from "../../components/Copyright";

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
      <Copyright />  
      
      <div className="authInnerContainer">        
        <div>
        <h3>LOGIN</h3>
        <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            inputRef={usernameRef}
            autoFocus
            style={{color:'#112233'}}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            inputRef={passwordRef}
            autoComplete='current-password'
          />
        
          <p>Don’t have an account?</p>
          <Link to="/register">
            Sign Up
          </Link>          
        </div>

        <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={loginUser}
            className={classes.submit}
          >
            Login
          </Button>
      </div>
    </div>
  );
};

export default withRouter(Login);
