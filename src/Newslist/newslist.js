import React from 'react'

const NewsList = (props) => {
    const mapNews = props.news.map((story, index)=>{
            return (<li key={index}>
                    <a href={story.url}>
                        <img className="story-img" src={story.urlToImage}/><br/>
                        {story.title}, from {story.source.name}          
                    </a>
                </li>)
        })
    return(
        <div>
            <h2>Sandwich News Today</h2>
            <ul className="story-ul">
                {mapNews}
            </ul>
        </div>
    )   
    
}

export default NewsList;