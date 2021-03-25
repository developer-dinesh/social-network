import React from "react";
import '../App.css'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
 
const title = {fontFamily: "'Akaya Telivigala', cursive", fontSize:"25px"};
const button1 = {marginLeft:"1400px", fontSize:"15px", fontFamily: "'Akaya Telivigala', cursive"};
const button2 = {marginLeft:"50px", fontSize:"15px", fontFamily: "'Akaya Telivigala', cursive"};
const button3 = {marginLeft:"50px", fontSize:"15px", fontFamily: "'Akaya Telivigala', cursive"};

const Navbar = () => {


    return (
        <>
            <AppBar position="static" style={{backgroundColor: "white", color:"black"}}>
                <Toolbar>
                    <Typography variant="h5" style={title}  >
                        OkaySocial
                    </Typography>
                      
     
                        <Button style={button1} href="/signin">signin</Button>
                        <Button style={button2} href="/signup">signup</Button>
                        <Button style={button3} href="/profile">profile</Button>
                </Toolbar>
            </AppBar>
             
        </>
    );
};

export default Navbar;