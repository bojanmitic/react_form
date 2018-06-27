import React from 'react';
import '../App.css';
class PersonalInfo extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        fullName:'',
                        phone:'',
                        email:'',
                        emailAgain:'',
                        address:'',
                        city:'',
                        state:'',
                        country:'',
                        zip:'',
                        howDidYouHearAboutUs:'',
                        isTouched:{
                                fullName:false,
                                phone:false,
                                email:false,
                                emailAgain:false,
                                address:false,
                                city:false,
                                state:false,
                                country:false,
                                zip:false,     
                        }      
                      
                }
        }
        handleChange = (e)=>{
                this.setState({[e.target.name]:e.target.value})
        }
        validate = (fullName, phone, email, emailAgain, address, 
                    city,state,country,zip,howDidYouHearAboutUs) =>{
                const errors = {
                        fullName : /[a-zA-Z]+[\s|.][a-zA-Z]+/.test(fullName) ? '' : "*Please enter alphabet characters only.",
                        phone: /^[0-9]{10}$/.test(phone) ? '' : "*Please enter your mobile no.",
                        email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(email) 
                                ? '' : "*Please enter a valid email.",
                        emailAgain: email === emailAgain ? '' : 'Wrong email address, please try again.',
                        address: /[\w|[a-zA-Z.:]+[\s|\W|\d]+[\w+|\s\d]+/.test(address) ? '' : 'You have entered an invalid address. Please try again.',
                        city:/[a-zA-Z]+/.test(city) ? '' : 'You have entered an invalid city. Please try again.',
                        state: /[a-zA-Z]+/.test(state) ? '' : 'You have entered an invalid state. Please try again.',
                        country: /[a-zA-Z]+/.test(country) ? '' : 'You have entered an invalid country. Please try again.',
                        zip: /^[0-9]{3,6}$/.test(zip) ? '' : 'You have entered an invalid zip code. Please try again.'
                }
                return errors;
        }
        handleSubmit = (e) => {
                e.preventDefault();

                alert('Form is submited')
                this.setState({
                        fullName:'',
                        phone:'',
                        email:'',
                        emailAgain:'',
                        address:'',
                        city:'',
                        state:'',
                        country:'',
                        zip:'',
                        howDidYouHearAboutUs:'',
                        isTouched:{
                                fullName:false,
                                phone:false,
                                email:false,
                                emailAgain:false,
                                address:false,
                                city:false,
                                state:false,
                                country:false,
                                zip:false,     
                        }      
                })
        } 
        isSubmitDisabled = (errors) => {
                return Object.values(errors).some(errMsg=> errMsg);
        }
        handleFocus = (e)=>{
                const name = e.target.name;
                this.setState((prevState)=>({
                     isTouched:{
                             ...prevState.isTouched,[name]:true
                     }   
                })) 
        }
        render(){
                const {fullName, phone, email, emailAgain, address, city,state,
                        country,zip,howDidYouHearAboutUs,isTouched
                                                        } = this.state;
                const errors = this.validate(fullName, phone, email, emailAgain, address, 
                        city,state,country,zip,howDidYouHearAboutUs);
                       console.log(errors) 
                return(
                        <form onSubmit={this.handleSubmit}>
                            <div className="formSection">
                                <div className="formHeadings">
                                    <h3>1. Personal information</h3>
                                </div>
                                <div className="formSection">
                                <div className="flex">
                                        <div className="nameDiv margin-right">
                                                <input  
                                                        className={errors.fullName && isTouched.fullName ? 'height  invalid' : 'height margin-right'}
                                                        type="text" 
                                                        name="fullName"
                                                        placeholder="Full name*"
                                                        value={fullName}
                                                        onChange={this.handleChange}
                                                        onBlur={this.handleFocus}
                                                /><br />{isTouched.fullName && errors.fullName ? <div className="err-msg" style={{width:"70%"}}>{errors.fullName}</div> : ''}
                                        </div>
                                
                                        <div className="phoneDiv ">
                                                <input 
                                                        className={errors.phone && isTouched.phone ? 'height  invalid' : 'height '}
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone*"
                                                        value={phone}
                                                        onChange={this.handleChange}
                                                        onBlur={this.handleFocus}
                                                /><br /> {isTouched.phone && errors.phone ? <div className="err-msg">{errors.phone}</div> : '' }
                                        </div> 
                                </div>
                                        <input 
                                                className={isTouched.email && errors.email ? 'height invalid' : 'height'}
                                                type="text"
                                                name="email"
                                                placeholder="Email*"
                                                value={email}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        />{isTouched.email && errors.email ? <div className="err-msg">{errors.email}</div> : ""}<br />
                                        <input 
                                                className={isTouched && errors.emailAgain ? 'height invalid' : 'height'}
                                                type="text"
                                                name="emailAgain"
                                                placeholder="Re-enter email*"
                                                value={emailAgain}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        />{isTouched.emailAgain && errors.emailAgain ? <div className="err-msg">{errors.emailAgain}</div> : ""}<br />
                                        <input 
                                                className={isTouched.address && errors.address ? 'height invalid' : 'height'}
                                                type="text" 
                                                name="address"
                                                placeholder="Address*"
                                                value={address}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        />{isTouched.address && errors.address ? <div className="err-msg">{errors.address}</div> : ""}<br />
                                <div className="grid">
                                <div>
                                        <input  
                                                className={isTouched.city && errors.city ? 'height invalid split margin-right' : 'height split margin-right'} 
                                                type="text"
                                                name="city"
                                                placeholder="City*"
                                                value={city}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        /><br/>{isTouched.city && errors.city ? <div id="city" className="err-msg">{errors.city}</div> :''}
                                </div>
                                <div>
                                        <input  
                                                className = {isTouched.state && errors.state ? 'height split margin-right invalid' :'height split margin-right' }
                                                type="text"
                                                name="state"
                                                placeholder="State"
                                                value={state}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        /><br/>{isTouched.state && errors.state ?  <div id="state" className="err-msg ">{errors.state}</div> :''}

                                </div>
                                <div>
                                        <input  
                                                className={isTouched.country && errors.country ? 'height invalid split margin-right' : 'height split margin-right'}
                                                type="text"
                                                name="country"
                                                placeholder="Country/Region*"
                                                value={country}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        /><br />{isTouched.country && errors.country ? <div id="country" className="err-msg ">{errors.country}</div> : ''}
                                </div>
                                <div>
                                        <input
                                                className={isTouched.zip && errors.zip ? 'height split invalid' : 'height split'}
                                                type="text"
                                                name="zip"
                                                placeholder="Zip/Postal code"
                                                value={zip}
                                                onChange={this.handleChange}
                                                onBlur={this.handleFocus}
                                        
                                        /><br />{isTouched.zip && errors.zip ? <div id="zip" className="err-msg  ">{errors.zip}</div> :''}
                                </div>
                                </div>
                                        <input 
                                                className="height"
                                                type="text"
                                                name="howDidYouHearAboutUs"
                                                placeholder="How did you hear about us"
                                                value={howDidYouHearAboutUs}
                                                onChange={this.handleChange}
                                        />
                                </div> 
                            </div>
                            <button type="submit" id="submitButton" disabled={this.isSubmitDisabled(errors)}>Submit</button>
                        </form>
                    )
        }
    
}


export default PersonalInfo;