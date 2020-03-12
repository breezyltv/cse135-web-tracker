import React, { Component } from 'react';
import F2 from './../../images/f2.png';
import White_dog from './../../images/white_dog.gif';
import OWL from './../../images/owl.svg';
import DOG from './../../images/dog.gif';

class Images extends Component {
render() {
  return (
    <div id="content-image">
      <h2 >Image</h2>
    		<hr />

    		<div className="one_img">
    			<div className="profile-pic"><a href="#"><img  alt="JPG" src={OWL}  /></a></div>
    			<div className="profile">
    				<h5><a href="#">JPG</a></h5>
    			</div>
    		</div>

    		<div className="one_img">
    			<div className="profile-pic"><a href="#"><img alt="PNG" src={F2} /></a></div>
    			<div className="profile">
    				<h5><a href="#">PNG</a></h5>
    			</div>
    		</div>

    		<div className="one_img">
    			<div className="profile-pic"><a href="#"><img alt="Animated GIF" src={White_dog}/></a></div>
    			<div className="profile">
    				<h5><a href="#">Animated GIF</a></h5>
    			</div>
    		</div>

    </div>
  );
}
}
export default Images;
