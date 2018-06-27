import React from 'react';
import validator from "validator";
import '../App.css';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state={
            portfolioLink:'',
            textArea:'',
            isTouched:false
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate = (porfolio) =>{
       const errors ={
            portfolio: validator.isURL(porfolio) ? "" : 'Please enter valid link address.'
        }
       return errors; 
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            portfolioLink:'',
            textArea:''
        })
    }
    isTouched = (e) => {
        const name = e.target.name;
        this.setState((prevState) =>({
            isTouched:{
                ...prevState.isTouched,[name]:true 
            }
        }))
    }
    render(){
        const {portfolioLink, textArea, isTouched} = this.state;
        const errors = this.validate(portfolioLink);
        console.log(errors)
        return (
            <form onSubmit={this.handleSubmit}>
                <div  className="formSection">
                        <div className="formHeadings">
                                <h3>3. Portfolio</h3>
                        </div>
                        <div>
                            <h5>
                                Prove you're next great designer by showing us
                                who you are. What you've done. How you think.
                                Tell us your story.
                            </h5>
                            <input 
                                    type="text"
                                    name="portfolioLink"
                                    placeholder="Portfolio link*"
                                    value={portfolioLink}
                                    onChange={this.handleChange}
                                    className = {errors.portfolio && isTouched.portfolioLink  ? 'invalid' : ''}
                                    onBlur={this.isTouched}
                            /><br /><div className='err-msg margin'>{errors.portfolio}</div>
                            <textarea 
                                    rows="5" cols="50"
                                    placeholder="Anything else(another link, availability, ect.)?"  
                                    value={textArea} 
                                    name="textArea"   
                                    onChange={this.handleChange}     
                            ></textarea>
    
                            
                        </div>
                </div>
                <button type="submit" id="submitButton">Submit</button>
         </form>
        )
    }  
}

export default Portfolio;