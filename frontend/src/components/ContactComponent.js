import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"",
            email:"",
            message:"",
            date:"",
            errors:{
                fullname:false,
                email:false,
                message:false,
                date:false
            }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        var accepted=true;
        if(this.state.fullname.length<5 || this.state.fullname.length>20){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    fullname:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    fullname:false
                }
            }));
        }

        if(this.state.email.length<10 || this.state.email.length>80){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    email:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    email:false
                }
            }));
        }

        if(this.state.message.length<20 || this.state.message.length>150){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    message:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    message:false
                }
            }));
        }

        if(accepted){
            var today = new Date();
            var current_date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDay()+" "+today.getHours()+":"+today.getMinutes();
            this.setState({date:current_date});
            setTimeout(()=>{
                alert("Message Sent on "+this.state.date);
                this.setState({
                    fullname:"",
                    email:"",
                    message:"",
                    date:"",
                    errors:{
                        fullname:false,
                        email:false,
                        message:false,
                        date:false
                    }
                });
            },1500);
        }
    }

    handleErrors(event){
        if(event==="fullname"){
            if(this.state.errors.fullname===true) return "App-error-show";
            else return "App-error-hide";
        }
        else if(event==="email"){
            if(this.state.errors.email===true) return "App-error-show";
            else return "App-error-hide";
        }
        else if(event==="message"){
            if(this.state.errors.message===true) return "App-error-show";
            else return "App-error-hide";
        }
        else{
            return "App-error-hide";
        }
    }

    render(){
        return(
            <div className="App-contact">
                <div className="container">
                    <h1>If you have any problem contact us.</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="fullname" sm={2}>Fullname</Label>
                            <Col sm={10}>
                                <Input type="text" name="fullname" placeholder="Your fullname" value={this.state.fullname} onChange={this.handleChange} required />
                                <Alert className={this.handleErrors("fullname")} color="danger">
                                    {"The name should be bigger than 5 and less than 20"}
                                </Alert>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" placeholder="Your Email"  value={this.state.email} onChange={this.handleChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                                    <Alert className={this.handleErrors("email")} color="danger">
                                        {"The Email should be bigger than 10 and less than 80"}
                                    </Alert>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="message" sm={2}>Message</Label>
                            <Col sm={10}>
                                <Input type="textarea" rows="5" placeholder="Your message" name="message"  value={this.state.message} onChange={this.handleChange} required />
                                <Alert className={this.handleErrors("message")} color="danger">
                                    {"Your message should be bigger than 20 and less than 150"}
                                </Alert>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{offset: 2 }}>
                                <Button color="primary" type="submit" className="px-5">Send</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;