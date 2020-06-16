import React,{useState, useEffect} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Post from './PostComponent';
import Contact from './ContactComponent';
import BlogDetail from './BlogDetailComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';

function Main(){
    const [blogs, setBlogs]=useState([]);
    const [fetchData,setFetchData]=useState(true);

    useEffect(()=>{
        fetch(baseUrl+"blogs")
        .then((res)=>{
            if(res.ok) return res.json();
            else throw new Error("Error : fetch blogs failed");
        })
        .then(data=>setBlogs(data))
        .catch(err=>console.log(err));
        setFetchData(false);
    },[fetchData]);

    const addBlog=(blog)=>{
        setBlogs((prevBlog)=>[...prevBlog,blog]);
    }

    return(
        <div className="App-main">
            <Header />
                <Switch>
                    <Route path="/home">
                        <Home blogs={blogs} />
                    </Route>
                    <Route path="/blogs/:id" component={BlogDetail} />
                    <Route path="/aboutus">
                        <About />
                    </Route>
                    <Route path="/post">
                        <Post onAddBlog={addBlog} blogId={blogs.length} />
                    </Route>
                    <Route path="/contactus">
                        <Contact />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
    );
}

export default Main;