import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';

const Blog=({title,image,author,date,children})=>{
    return(
        <div className="App-blog">
             <Card className="App-blog-card my-2">
                <CardImg top width="100%" height="250px" src={baseUrl+image} alt="blog img" />
                <CardBody>
                    <CardTitle className="App-blog-title">
                        <h1>{title}</h1>
                    </CardTitle>
                    <CardSubtitle className="App-blog-subtitle">
                        <img src={baseUrl+author.image} alt="author img" />
                        <span className="author-infos">
                            <h2>{author.name}</h2>
                            <time>{moment(date).fromNow()}</time>
                        </span>
                    </CardSubtitle>
                    <CardText className="App-blog-text">{children}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

Blog.propTypes={
    title:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    author:PropTypes.object.isRequired,
    date:PropTypes.string.isRequired,
    children:PropTypes.string
}

function Home({blogs}) {
    const renderBlogs=blogs.map(blog=>(
            <Col key={blog._id} lg={4} md={6}>
                <Link to={"/blogs/"+blog._id}>
                    <Blog title={blog.title} image={blog.image} author={blog.author} date={blog.date}>
                        {blog.description}
                    </Blog>
                </Link>
            </Col>
        )
    );

    return(
        <div className="App-home">
            <div className="container">
                <Row>
                    {renderBlogs}
                </Row>    
            </div>
        </div>
    );
}

Home.propTypes={
    blogs:PropTypes.array
}

export default Home;