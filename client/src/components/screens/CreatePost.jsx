import react from 'react'
import {TextField,Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';

 

const CreatePost = ()=>{
	
	const btnstyle={margin:'8px',marginBottom:'50px'};
	const btnstyle2={marginTop:'70px',marginLeft:'0px',marginBottom:'10px'};
	
    return(
			
        <div style={{margin:"50px auto",
        maxWidth:"500px",
        padding:"20px"}}>
				<Card>
        <TextField placeholder="title"
        />
        <TextField fullWidth placeholder="body"
        />
        <Button style ={btnstyle} variant='contained'
  
  component="label"   
>
  Upload Pic here......
  <input 
    type="file"
    hidden
  />
</Button>
<Button style ={btnstyle2} type='submit' variant='contained' color='primary'>Create Post</Button>
</Card>
        </div>
    )
}

export default CreatePost;