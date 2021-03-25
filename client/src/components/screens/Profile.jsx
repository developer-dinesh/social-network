import React from 'react';
 
const first={maxWidth:"1500px",margin:"0px auto"};
const second={
	display:"flex",
	justifyContent:"space-around",
	margin:"18px 0px",
	borderBottom:"1px solid grey"
};
const pimg={width:"160px",height:"160px",borderRadius:"80px"};
 
const pdata={display: "flex", 
justifyContent:"space-between",
width:"108%"};

const Profile = () => {
  return (
    <div style={first}>
      <div style={second}>
			  <div> 
			    <img style={pimg}
          src="https://cutt.ly/Bxt4bE5"alt="gallery" />
        </div>
				<div>
					<h4>name</h4>
					<div style={pdata}>
						<h5>0 posts</h5>
						<h5>0 followers</h5>
						<h5>0 followings</h5>
					</div>
				</div>
      </div>
      
	  <div className="gallery">
				<img  className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery" />
				<img  className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery" />
				<img className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery" />
				<img className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery"/>
				<img className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery" />
				<img className="item" src="https://cutt.ly/Bxt4bE5" alt="gallery" />
			</div>
		</div>
    )
}

export default Profile;