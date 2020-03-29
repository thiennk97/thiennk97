import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Modal from './modal';


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
  icon: {
    marginTop: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    width: '200%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    color: 'red',
    fontSize: '400px'
  },
});

const classes = makeStyles(useStyles);

export default class AllUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Object.values(this.props),
      password: '',
      email: '',
      avatar: '',
      count: 0,
      name: '',
      contact: '',
    }
  };

  DDDcl = event =>{
    this.setState({
      count: this.state.count +1,
    });

    console.log('click ne');
    console.log(this.state.count);
  }

  handleDelete = id =>{
    const token = document.getElementsByName('csrf-token')[0].content;
    axios.delete(`http://localhost:3000/users/${id}`,
    { headers: {'X-CSRF-Token': token} })
    .then(res => {
      this.setState({
        data: Object.values(res.data)
      }, () => {console.log(this.state.data);})
    });
  }

  // componentWillMount(){
  //   this.setState({
  //     data: Object.values(this.props)
  //   })
  //   console.log(this.props);
  // }

  // componentDidMount(){
  //   this.setState({
  //     data: Object.values(this.props)
  //   })
  //   console.log(this.props);
  // }

  // componentWillUpdate(){
  //   this.setState({
  //     data: Object.values(this.props)
  //   })
  //   console.log(this.props);
  // }

  // componentDidUpdate() {
  //     this.setState({
  //       data: Object.values(res.data)
  //     })
  // }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps !==this.props){
  //     this.setState({
  //       data: Object.values(nextProps)
  //     })
  //   }
  // }


  handleSubmit = (ne, el, ar, ct) => {
    console.log('thang cha da goi');
    event.preventDefault();

    const token = document.getElementsByName('csrf-token')[0].content;

    var user = {
        name: ne,
        image: ar,
        email: el,
        contact: ct,
    }

    axios.post('http://localhost:3000/users', { user_params: user },
      { headers: {'X-CSRF-Token': token} })
    .then(res => {
      console.log("?????????????");
      this.setState({
        data: Object.values(res.data)
      }, () => {console.log(this.state.data);})
    });
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

  getDataApi = () =>{
    this.setState({
      count: this.state.count + 1 ,
    });
  };const classes = makeStyles(useStyles);

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" noWrap style={{'color': 'red', 'marginTop': '5%'}} >
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <Modal onclick = {this.handleSubmit}/>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        </div>
        <br/>
        <br/>
        <Container maxWidth="sm">
          <List className={classes.root}>
          {this.state.data.map((val, key) => (
            <Box borderColor="primary.main" clone>
              <ListItem alignItems="flex-start" xs={12}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={val.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={val.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary">
                        Email: {val.email}
                      </Typography><br/>
                      Contact: {val.phone_number} {this.state.count}
                    </React.Fragment>
                  }
                />
                <hr></hr>
                <Button
                  onClick = {() => (this.handleDelete(val.id))}
                  variant="contained"
                  color="warning"
                >Delete</Button>
              </ListItem >
            </Box>
          ))}                        className={classes.inline}

          </List>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footerconst classes = makeStyles(useStyles);
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <MadeWithLove />
      </footer>
      {/* End footer */}
    </React.Fragment>
    );
  }
}
