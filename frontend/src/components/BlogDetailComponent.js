import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';

const Blog=({title,image,author,date,children})=>{
    return(
        <Card>
            <CardImg top width="100%" src={baseUrl+image} alt="blog img" />
            <CardBody>
                <CardTitle className="App-blog-detail-title">
                    <h1>{title}</h1>
                </CardTitle>
                <CardSubtitle className="App-blog-detail-subtitle">
                    <img src={baseUrl+author.image} alt="author img" />
                    <span className="author-infos">
                        <h2>{author.name}</h2>
                        <time>{moment(date).fromNow()}</time>
                    </span>
                </CardSubtitle>
                <CardText className="App-blog-detail-text">{children}</CardText>
            </CardBody>
        </Card>
    );
}

Blog.propTypes={
    title:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    author:PropTypes.object.isRequired,
    date:PropTypes.string.isRequired,
    children:PropTypes.string
}

function BlogDetail({match}) {
    const [blog,setBlog]=useState({title:"", image:"", author:{name:"",email:"",image:""}, date:"", description:""});
    const [fetchData,setFetchData]=useState(true);

    useEffect(()=>{
        var id=match.params.id;
        fetch(baseUrl+"blogs/"+id)
        .then((res)=>{
            if(res.ok) return res.json();
            else throw new Error("Error : fetch blogs failed");
        })
        .then(data=>setBlog(data))
        .catch(err=>console.log(err));
        setFetchData(false);
    },[fetchData,match.params.id]);

    return(
        <div className="App-blog-detail">
            <div className="container">
                <Row>
                    <Col md={12}>
                        <Blog title={blog.title} image={blog.image} author={blog.author} date={blog.date}>
                            {blog.description}
                        </Blog>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default BlogDetail;