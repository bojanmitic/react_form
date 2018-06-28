import React from 'react';
import '../App.css';

class Skills extends React.Component {
        constructor(props){
                super(props);
                this.state={
                   selectedOption: '',
                   experience:{
                        visualDesign_check:false,
                        uxDesign_check:false,
                        front_end_check:false,
                   },
                   location:{
                           austinTexas:false,
                           newYork:false,
                           toronto:false,
                           shangai:false,
                           dublin:false,
                           hursley:false,
                           boeblingen:false,
                           else:false
                   },
                   isChecked:true
                }
        }
        handleChange = (e)=>{
                this.setState({
                        selectedOption: e.target.value
                })
        }
        onCheckboxChange = (e,obj) => {
                const name = e.target.name;
                const experience = {...this.state.experience};
                const location = {...this.state.location};
                if(obj ==='experience'){
                    experience[name] = !this.state.experience[name];
                }else{
                        location[name] = !this.state.location[name];
                }
              this.setState({
                  experience,
                  location
              })  
        } 
        handleSubmit = (e) =>{
                e.preventDefault();

                const expObj = this.state.experience;
                const locObj = this.state.location;
                const expValues = Object.values(expObj).every(val=>val===false);
                const locationValues = Object.values(locObj).every(val=>val===false); 

                this.setState({
                isChecked:!(expValues && locationValues)
                })
                
                this.setState({
                        selectedOption:'',
                        experience:{
                             visualDesign_check:false,
                             uxDesign_check:false,
                             front_end_check:false,
                        },
                        location:{
                                austinTexas:false,
                                newYork:false,
                                toronto:false,
                                shangai:false,
                                dublin:false,
                                hursley:false,
                                boeblingen:false,
                                else:false 
                        }
                })  
        } 
        render(){
                const {selectedOption} = this.state;
                return (
                        <form onSubmit={this.handleSubmit}>
                        <div className="formSection">
                            <div className="formHeadings">
                                <h3>2. Skills and location</h3>
                            </div>
                            <h5>Which is your primary design discipline?*</h5>
                            <div id="radioButtons">
                                <input 
                                        
                                        checked = {this.state.selectedOption==='designResearch'}
                                        type="radio" 
                                        name="primaryDesign" 
                                        value="designResearch" 
                                        id="designResearch"
                                        onChange={this.handleChange}
                                /><label htmlFor="designResearch">Design Research</label>
                                <input 
                                        checked={this.state.selectedOption === 'visualDEsign'}
                                        type="radio" 
                                        name="primaryDesign" 
                                        value="visualDEsign" 
                                        id="visualDEsign"
                                        onChange={this.handleChange}
                                /><label htmlFor="visualDEsign">Visual Design</label>
                                <input 
                                        checked={this.state.selectedOption === 'UXdesign'}
                                        type="radio" 
                                        name="primaryDesign" 
                                        value="UXdesign" 
                                        id="uxDesign"
                                        onChange={this.handleChange}
                                /><label htmlFor="uxDesign">UX Design</label>
                                <input 
                                        checked={this.state.selectedOption === 'frontEndDev'}
                                        type="radio" 
                                        name="primaryDesign" 
                                        value="frontEndDev"
                                        id="front_end"
                                        onChange={this.handleChange}
                                /><label htmlFor="front_end">Front-end Dev</label>
                            </div>
                            <div id="checkboxDiv">
                                        <div id="checkboxWrapper" className="formSection">
                                          <div style={{width:"100%"}}>
                                            <h5>Do you have experience with any other discipline</h5>
                                            <input 
                                                    onChange = {e=>this.onCheckboxChange(e,'experience')}
                                                    checked={this.state.experience.visualDesign_check}
                                                    type="checkbox" 
                                                    name="visualDesign_check" 
                                                    value="visualDesign_check"  
                                                    id="visualDesign_check"  
                                            /><label htmlFor="visualDesign_check">Visual Design</label><br />
                                            <input 
                                                    onChange = {e=>this.onCheckboxChange(e,'experience')}
                                                    checked={this.state.experience.uxDesign_check}
                                                    type="checkbox" 
                                                    name="uxDesign_check" 
                                                    value="uxDesign_check"  
                                                    id="uxDesign_check"  
                                            /><label htmlFor="uxDesign_check">UX design</label><br />
                                            <input 
                                                    onChange = {e=>this.onCheckboxChange(e,'experience')}
                                                    checked={this.state.experience.front_end_check}
                                                    type="checkbox" 
                                                    name="front_end_check" 
                                                    value="front_end_check"  
                                                    id="front_end_check"  
                                            /><label htmlFor="front_end_check">Front-end Development</label><br />
                                        </div>
                                        <div id="sideCheckbox">
                                            <h5>Where are you interested in working?*</h5>
                                            <p>
                                                You must be legally authorized to work without visa
                                                sponsorship in the location you choose
                                            </p>
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.austinTexas}
                                                    type="checkbox"
                                                    name="austinTexas"
                                                    value="austinTexas"
                                                    id="austin"
                                            /><label htmlFor="austin">Austin, Texas</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.newYork}
                                                    type="checkbox"
                                                    name="newYork"
                                                    value="newYork"
                                                    id="newYork"
                                            /><label htmlFor="newYork">New York, New York</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.toronto}
                                                    type="checkbox"
                                                    name="toronto"
                                                    value="toronto"
                                                    id="toronto"
                                            /><label htmlFor="toronto">Toronto, Canada</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.shangai}
                                                    type="checkbox"
                                                    name="shangai"
                                                    value="shangai"
                                                    id="shangai"
                                            /><label htmlFor="shangai">Shangai, China</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.dublin}
                                                    type="checkbox"
                                                    name="dublin"
                                                    value="dublin"
                                                    id="dublin"
                                            /><label htmlFor="dublin">Dublin, Irleand</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.hursley}
                                                    type="checkbox"
                                                    name="hursley"
                                                    value="hursley"
                                                    id="hursley"
                                            /><label htmlFor="hursley">Hursley, United Kingdom</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.boeblingen}
                                                    type="checkbox"
                                                    name="boeblingen"
                                                    value="boeblingen"
                                                    id="boeblingen"
                                            /><label htmlFor="boeblingen">Boeblingen, Germany</label><br />
                                            <input
                                                    onChange = {e=>this.onCheckboxChange(e,'location')}
                                                    checked={this.state.location.else}
                                                    type="checkbox"
                                                    name="else"
                                                    value="else"
                                                    id="else"
                                            /><label htmlFor="else">Somewhere else</label><br />
                                        </div>
                                        
                                    </div>
                                    {!this.state.isChecked ?<div className="err-msg align">Please select at least one option</div> :''}
                                </div>
                            </div> 
                            <button type="submit" className={selectedOption ?'submitButton': 'disabled' }>Submit</button>
                       </form>   
                    )
        }

}

export default Skills;