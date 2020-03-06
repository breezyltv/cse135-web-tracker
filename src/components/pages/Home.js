import React, { Component } from 'react';

class Home extends Component {
render() {
  return (
    <div id="content-home">
    	<div class="text-home"><h2>Homework 3</h2></div>
    	<div class="home-dash"></div>
    	<div class="clear"></div>
    	<p><i>CSE 135 Winter 2020 UCSD</i></p>
    	<code>This is code tag:
    			alert( 'Hello, world!' );
    	</code>
    	<pre>
    			Without requirements or design, programming is the art of adding bugs to an empty text file.
    		 (Louis Srygley).
    	</pre>

    </div>
  );
}
}
export default Home;
