import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'

const Signup = () => {
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
     
     
     
    return (
        <div style={{marginTop:"60px", border:"2px strong"}}>
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={{fontFamily: "'Akaya Telivigala', cursive"}}>Sign Up</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;
