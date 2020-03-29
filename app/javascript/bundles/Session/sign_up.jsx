import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    borderTop: `4px solid #066D7C`,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  input: {
    '&:before': {
      borderBottom: `1px solid #066D7C`
    },
    '&:after': {
      borderBottom: `2px solid #066D7C`
    }
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);PropTypes
    this.classes = this.props.classes;

    this.state = {
      password: '',
      email: '',
      remember: false,
    }
  };

  componentDidMount = () => {
    window.addEventListener('message', (event) => {
      if(typeof(event.data) === 'string') {
        this.setState({error: event.data})
      }
    }, false);
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      password: this.state.password,
      email: this.state.email,
      remember: this.state.remember
    };

    const token = document.getElementsByName('csrf-token')[0].content;

    axios.post('http://localhost:3000/sessions',
      { user_params: user},
      { headers: {'X-CSRF-Token': token} })
    .then(res => {
      window.location.href="http://localhost:3000/users";
    });
  };

  handleChangeName = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangeRmb = event => {
    this.setState({ remember: true });
  };

  render() {
    return (
      <main className={this.classes.main}>
        <CssBaseline />
        <Paper className={this.classes.paper}>
          <Typography component='h1' variant='overline'>
            Sign in
          </Typography>
          <form className={this.classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>Email Address</InputLabel>
              <Input id='email' name='email' autoComplete='email' autoFocus className={this.classes.input} onChange={this.handleChangeEmail}/>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input name='password' type='password' id='password' autoComplete='current-password' className={this.classes.input} onChange={this.handleChangeName}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value='remember' color='primary'/>}
              label='Remember me' onChange={this.handleChangeRmb}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              style={{background: 'linear-gradient(45deg, #066D7C 30%, #2CCCAA 90%)'}}
              className={this.classes.submit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
