import React, {Component} from 'react';
import NewsList from "../Newslist/newslist"

class MainContainer extends Component{
    constructor(){
        super();

        this.state = {
            news: [],
            searchTerm: ''
        }
    }
    getNews = async ()=>{
        try{
            const url = 'https://newsapi.org/v2/everything?' +
            'q='+{}+'&' +
            'from=2019-08-07&' +
            'sortBy=popularity&' +
            'apiKey=2946de819a194919a957ae8c2c803a87';
            console.log(url);
            const req = new Request(url)
            const news = await fetch(req)
            const parsedNews = await news.json();
            console.log(parsedNews);
            return parsedNews.articles;
        } catch(err){
            console.log(err);
            return err;
        }  
    }
    componentDidMount(){
        this.getNews().then((data)=>{
            console.log(data);
            this.setState({news:data});
            console.log(this.state.news);        })
    }
    handleChange = (e) =>{
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} name="searchTerm" placholder="Search the News" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <h1></h1>
                <NewsList news={this.state.news}/>
            </div>
            
        );
    }
}

export default MainContainer;