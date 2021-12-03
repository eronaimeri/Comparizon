import React from 'react'
import Blogs from '../../blogs.json'
import './Home.css'

const LatestNews = () => {
    return (
        <>
            {Blogs.map(props => {
                return (
                    <div className="latest-news-posts col-md-6 col-lg-6 col-xl-6">
                        <div className="d-inline-flex">
                            <div>
                                <img src={props.image} className="latest-news-img" />
                            </div>

                            <div>
                                <span>{props.date}</span>

                                <a href={props.link}><h4>{props.title}</h4></a>
                            </div>
                        </div>

                        <div>
                            <p>{props.summary}</p>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default LatestNews