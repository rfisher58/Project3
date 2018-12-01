import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LongMenu from '../language/language';
import Axios from "axios";
import NewCard from "../NewCards/NewCards"
import "./edit.css";

export default class Edit extends React.Component {
  state = {
    open: false,
    title:"",
    description: "",
    link: "",
    dueDate: Date,
    pay: "",
    languages: [],

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


// Methods

handleInputChange = event => {
  let value = event.target.value;
  let name = event.target.name;
  this.setState({
    [name]: value
  })
  console.log(value);
}

// post bug to database
postBug = event =>{
  event.preventDefault();
  console.log(this.state);

  Axios.post('/api/bugs', this.state).then((response)=>{
    this.setState({
      title: "",
      description: "",
      link: "",
      dueDate: Date,
      pay: null,
      languages: [],
    })
  })
  this.handleClose();
}


// delete bug from data base
deleteBug = event => {
    let value = event.target.value;
    let id = event.target.id;
    Axios.delete('/api/bugs/`${id}`').then((response)=>{
        console.log(response)
    })
    this.handleClose();
}

// edit bugs

editBug = event => {

}


  render() {
    return (
      <div>
        {/* <Fab onClick={this.handleClickOpen} color="primary" aria-label="Add">
        <AddIcon />
      </Fab> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Bug</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the below information 
            </DialogContentText>
            <TextField
              value = {this.state.title}
              name="title"
              autoFocus
              margin="dense"
              id="name"
              label="Bug Title"
              type="title"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <TextField
              value = {this.state.description}
              name="description"
              autoFocus
              margin="dense"
              id="name"
              label="Bug description"
              type="description"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <TextField
              value = {this.state.link}
              name="link"
              autoFocus
              margin="dense"
              id="link"
              label="GitHub Link"
              type="link"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <TextField
              value = {this.state.dueDate}
              name="dueDate"
              id="dueDate"
              label="Due Date"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {this.handleInputChange}
            />
            <TextField
              value = {this.state.pay}
              name="pay"
              autoFocus
              margin="dense"
              id="name"
              label="Pay"
              type="pay"
              fullWidth
              onChange = {this.handleInputChange}
            />
            <div>
              <LongMenu
              value = {this.state.languages}
              name="languages"
              onChange = {this.handleInputChange}
               />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.postBug} color="primary" >
              Post Bug
            </Button>
            <Button onClick={this.deletBug} color="primary" >
              Delete Bug
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}





