import React, { Component } from 'react';

class Form extends Component {
render() {
  return (
    <div id="content-image">
    	<div className="text-home"><h2 id="page-name">Form</h2></div>

        <div id="contact-form">
                <form id="contact" method="post" action="http://httpbin.org/post">
                    <ul>
                        <li>
                            <label htmlFor="label-box">Do you like coding?</label>
                            <input type="checkbox" name="label-box" id="cheese"></input>
                        </li>

                        <li>
                                <label htmlFor="ice-cream-choice">Choose a flavor:</label>
                                <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" ></input>

                                <datalist id="ice-cream-flavors">
                                    <option value="Chocolate"></option>
                                    <option value="Coconut"></option>
                                    <option value="Mint"></option>
                                    <option value="Strawberry"></option>
                                    <option value="Vanilla"></option>
                                </datalist>
                        </li>
                        <li>
                            <fieldset>
                                    <legend>Choose your favorite monster</legend>

                                    <input type="radio" id="kraken" name="monster"></input>
                                    <label htmlFor="kraken">Kraken</label><br/>

                                    <input type="radio" id="sasquatch" name="monster"></input>
                                    <label htmlFor="sasquatch">Sasquatch</label><br/>

                                  </fieldset>
                        </li>
                            <li >
                                    <label htmlFor="dino-select">This is optgroup:</label>
                                    <select id="dino-select">
                                        <optgroup label="Theropods">
                                            <option>Tyrannosaurus</option>
                                            <option>Velociraptor</option>
                                            <option>Deinonychus</option>
                                        </optgroup>
                                        <optgroup label="Sauropods">
                                            <option>Diplodocus</option>
                                            <option>Saltasaurus</option>
                                            <option>Apatosaurus</option>
                                        </optgroup>
                                    </select>
                            </li>
                            <li>
                                    <label htmlFor="fuel">Fuel level:</label>

                                    <meter id="fuel"
                                           min="0" max="100"
                                           low="33" high="66" optimum="80"
                                           value="50">
                                        at 50/100
                                    </meter>
                            </li>
                            <li className="clear"></li>
                            <li>
                                <label htmlFor="pet-select">Choose a pet:</label>

                                <select id="pet-select">
                                    <option value="">--Please choose an option--</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="hamster">Hamster</option>
                                    <option value="parrot">Parrot</option>
                                    <option value="spider">Spider</option>
                                    <option value="goldfish">Goldfish</option>
                                </select>

                            </li>
                            <li>
                                    <label htmlFor="file">File progress:</label>

                                    <progress id="file" max="100" value="70"> 70% </progress>

                            </li>
                        <li>
                            <input type="text" name="name" id="txt_name" placeholder="Name"></input>
                        </li>

                        <li>
                            <input type="text" name="email" id="txt_email" placeholder="E-mail"></input>
                        </li>

                        <li className="clear"></li>

                        <li>
                            <textarea name="message" className="form_message_field" rows="20" cols="30"></textarea>
                        </li>
                    </ul>

                    <button type="submit" className="button">Send Message</button>
                    <input type="hidden" name="submitted" id="submitted" value="true"></input>
                </form>
                <div className="clear"></div>
            </div>


    </div>
  );
}
}
export default Form;
