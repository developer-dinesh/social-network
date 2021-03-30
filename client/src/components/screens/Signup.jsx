import React,{useState} from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'

const Signup = () => {
    const paperStyle = { padding: 20, width: 280, margin: "20px auto" }
     
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
		const [email,setEmail] = useState("")
		const PostData = () =>{
			fetch("http://localhost/signup",{
				method:"post",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify({
					name:"",
					password:"",
					email:""
				})
			}).then(res=>res.json())
			.then(data=>{
				console.log(data)
			})
		}
     
    return (
        <div style={{marginTop:"60px", border:"2px strong"}}>
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={{fontFamily: "'Akaya Telivigala', cursive"}}>Sign Up</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField fullWidth label='Email' placeholder="Enter your email"
										value={email}
                    onChange={(e)=>setEmail(e.target.value)}
										/>
                    <TextField fullWidth label='Password' placeholder="Enter your password"
										value={password}
                    onChange={(e)=>setPassword(e.target.value)}
										/>
                    <Button type='submit' variant='contained' color='primary' onClick={()=>PostData}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;
