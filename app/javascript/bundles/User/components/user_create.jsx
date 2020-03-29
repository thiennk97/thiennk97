import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const classes = makeStyles(useStyles);

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          avatar: '',
          email: '',
          contact: '',
        }
      };

  handleSubmit = event => {
    const { name, email, avatar, contact } = this.state;
    this.props.onclick(name, email, avatar, contact);
    this.props.closeModal();
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeContact = event => {
    this.setState({ contact: event.target.value });
  };Model
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangeAvatar = event => {
    this.setState({ avatar: event.target.value });
  };

  render(){
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <br/>
          <br/>
          <br/>
          <br/>
          <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={this.handleChangeName}
                  />
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="contact"
                    variant="outlined"
                    required
                    fullWidth
                    id="contact"
                    label="Contact"
                    autoFocus
                    onChange={this.handleChangeContact}
                  />
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Avatar"
                    name="avatar"
                    autoComplete="lname"
                    onChange={this.handleChangeAvatar}
                  />
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChangeEmail}
                  />
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create
              </Button>
            </form>
          </div>
          <Box mt={5}>
            <MadeWithLove />
          </Box>
        </Container>
      );
  }
}