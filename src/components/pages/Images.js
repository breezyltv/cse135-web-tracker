import React, { Component } from 'react';
import F2 from './../../images/f2.png';
import White_dog from './../../images/white_dog.gif';
import OWL from './../../images/owl.svg';


class Images extends Component {
render() {
  return (
    <div id="content-image">
      <h2 >Image</h2>
    		<hr />

    		<div className="one_img">
    			<div className="profile-pic"><img  alt="JPG" src={OWL}  /></div>
    			<div className="profile">
    				<h5>JPG</h5>
    			</div>
    		</div>

    		<div className="one_img">
    			<div className="profile-pic"><img alt="PNG" src={F2} /></div>
    			<div className="profile">
    				<h5>PNG</h5>
    			</div>
    		</div>

    		<div className="one_img">
    			<div className="profile-pic"><img alt="Animated GIF" src={White_dog}/></div>
    			<div className="profile">
    				<h5>Animated GIF</h5>
    			</div>
    		</div>

    </div>
  );
}
}
export default Images;
