import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div style = {{textAlign:'center', margin:'15%', color: '#005288'}}>
            <form noValidate>
                <h1>SpaceX Login </h1>
                {/* <div style={{display:'inline-grid'}}>
                    <TextField
                    id="outlined-required"
                    label="Username"
                    variant="outlined"
                    style={{margin:'25px'}}
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    style={{margin:'25px'}}
                    />
                </div> */}
                <Button variant="contained" onClick={() => this.props.history.push('/dashboard')}>
                    View Dashboard
                </Button>
            </form>
            </div>
        )
    }
}

export default withRouter(Login);
