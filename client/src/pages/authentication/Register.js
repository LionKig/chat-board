import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link , withRouter } from 'react-router-dom';
import makeToast from "../../components/Toaster";
import { POST } from "../../utils/api";

import {
  TextField,
  Button,
  Typography,  
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {
  const usernameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const classes = useStyles();

  const registerUser = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    POST(
      "user/register",
      {
        username,
        email,
        password,
      },
      {},
      (response) => {
        makeToast("success", response.data.message);
        window.location.reload();
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
      <div className="row authcopyrow">
          <div className="col-md-8 desc pad itemsheight">
            <Link href='/'>
                <img src="/logoname.png" alt="Go to Sign"/>
            </Link>
          </div>
          <div className="col-md-4 dollar grey price middle space pad itemsheight">
            {/*<p>Pulitzer Ce nter on Crisis Reporting – Fellow/Correspondent. Traveled across Congo for several weeks to
              <br />report on election developments, and to raise awareness of the Congo conflict in US media.  Embedded
              <br />with Moroccan, Pakistani and Uruguayan United Nations peacekeepers in Ituri, Lake Albert and South
              <br />Kivu. Accredited with Ministry of Information and United Nations Mission in Congo (Summer 2006).
              <br/>ntary report on the relation between the Congo conflict and the scramble for mineral resources (Fall 2006).
              <br />Aired on PBS’ Foreign Exchange with Fareed Zakaria. Guest appearances on BBC’s World News
            </p> */}
            Pulitzer Ce nter on Crisis Reporting – Fellow/Correspondent. Traveled across Congo for several weeks to
              report on election developments, and to raise awareness of the Congo conflict in US media.  Embedded
              with Moroccan, Pakistani and Uruguayan United Nations peacekeepers in Ituri, Lake Albert and South
              Kivu. Accredited with Ministry of Information and United Nations Mission in Congo (Summer 2006).
              ntary report on the relation between the Congo conflict and the scramble for mineral resources (Fall 2006).
              Aired on PBS’ Foreign Exchange with Fareed Zakaria. Guest appearances on BBC’s World News        
          </div>
        </div>
      <div className="authInnerContainer">
        <h3>Register</h3>     
        <div className={"register" + classes.paper}>
        <form className={classes.form} noValidate>
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
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            inputRef={emailRef}
            autoComplete='email'
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
          <Button
            fullWidth
            variant='contained'
            color='primary'
            onClick={registerUser}
            className={classes.submit}>
            Register
          </Button>
        </form>
        <Typography variant="body1">
          Already have an account?{' '}
          {/*<Link component={RouterLink} to="/">
            Log In
          </Link>*/}
        </Typography>
      </div>
    </div>
    </div>
  );
};

export default withRouter(Register) ;
