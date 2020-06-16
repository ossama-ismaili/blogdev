import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

class Post extends Component {
    constructor(props){
        super(props);
        this.onAddBlog=props.onAddBlog;
        this.blogId=props.blogId+1;
        this.state={
            title:"",
            image:null,
            author_name:"",
            author_email:"",
            author_image:null,
            description:"",
            date:"",
            errors:{
                title:false,
                image:false,
                author_name:false,
                author_email:false,
                author_image:false,
                description:false,
                date:false
            }
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        if(event.target.name==="image" || event.target.name==="author_image") this.setState({[event.target.name]:event.target.files[0]});
        else this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        var accepted=true;
        if(this.state.title.length<5 || this.state.title.length>100){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    title:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    title:false
                }
            }));
        }

        if(this.state.author_name.length<5 || this.state.author_name.length>20){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    author_name:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    author_name:false
                }
            }));
        }

        if(this.state.author_email.length<10 || this.state.author_email.length>80){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    author_email:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    author_email:false
                }
            }));
        }

        if(this.state.description.length<20 || this.state.description.length>150){
            accepted=false;
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    description:true
                }
            }));
        }
        else{
            this.setState((prevState)=>({
                errors:{
                    ...prevState.errors,
                    description:false
                }
            }));
        }

        if(accepted){
            var today = new Date();
            var current_date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDay()+" "+today.getHours()+":"+today.getMinutes();
            this.setState({date:current_date});
            setTimeout(()=>{
                const newBlog={
                    id:this.blogId,
                    title:this.state.title,
                    image:this.state.image.name,
                    author:{name:this.state.author_name.name,image:this.state.author_image},
                    date:this.state.date,
                    description:this.state.description
                }

                this.onAddBlog(newBlog);
                this.setState({
                    title:"",
                    image:null,
                    author_name:"",
                    author_email:"",
                    author_image:null,
                    description:"",
                    date:"",
                    errors:{
                        title:false,
                        image:false,
                        author_name:false,
                        author_email:false,
                        author_image:false,
                        description:false,
                        date:false
                    }
                });
                document.getElementById("image").value=null;
                document.getElementById("author_image").value=null;
            },1500);
        }
    }

    handleErrors(event){
        if(event==="title"){
            if(this.state.errors.title===true) return "App-error-show";
            else return "App-error-hide";
        }
        else if(event==="name"){
            if(this.state.errors.author_name===true) return "App-error-show";
            else return "App-error-hide";
        }
        else if(event==="email"){
            if(this.state.errors.author_email===true) return "App-error-show";
            else return "App-error-hide";
        }
        else if(event==="description"){
            if(this.state.errors.description===true) return "App-error-show";
            else return "App-error-hide";
        }
        else{
            return "App-error-hide";
        }
    }

    render(){
        return(
            <div className="App-post">
                <div className="container">
                    <h1>Post a blog</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label for="title" sm={2}>Title</Label>
                            <Col sm={10}>
                                <Input type="text" name="title" placeholder="Blog's title" value={this.state.title} onChange={this.handleChange} required />
                                <Alert className={this.handleErrors("title")} color="danger">
                                    {"Blog's title should be bigger than 5 and less than 100"}
                                </Alert>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="image" sm={2}>Image</Label>
                            <Col sm={10}>
                                <Input type="file" name="image" id="image" accept="image/*" multiple={false} onChange={this.handleChange} required />
                                <FormText color="muted">
                                    the image of your blog.
                                </FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Author's informations</Label>
                            <Col sm={10}>
                                <div className="author-info-form">
                                    <FormGroup row>
                                        <Label for="author_name" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            <Input type="text" name="author_name" placeholder="Author's name" value={this.state.author_name} onChange={this.handleChange} required />
                                            <Alert className={this.handleErrors("name")} color="danger">
                                                {"Author's name should be bigger than 5 and less than 20"}
                                            </Alert>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="author_email" sm={2}>Email</Label>
                                        <Col sm={10}>
                                            <Input type="email" name="author_email" placeholder="Author's Email"  value={this.state.author_email} onChange={this.handleChange}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                                            <Alert className={this.handleErrors("email")} color="danger">
                                                {"Author's email should be bigger than 10 and less than 80"}
                                            </Alert>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="author_image" sm={2}>Image</Label>
                                        <Col sm={10}>
                                            <Input type="file" name="author_image" id="author_image" accept="image/*" multiple={false} onChange={this.handleChange} required />
                                            <FormText color="muted">
                                                the image of the author.
                                            </FormText>
                                        </Col>
                                    </FormGroup>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" rows="5" placeholder="Blog's description" name="description"  value={this.state.description} onChange={this.handleChange} required />
                                <Alert className={this.handleErrors("description")} color="danger">
                                    {"Blog's description should be bigger than 20 and less than 150"}
                                </Alert>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{offset: 2 }}>
                                <Button color="primary" type="submit" className="px-5">Post</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Post;