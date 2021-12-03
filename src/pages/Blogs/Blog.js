import React from 'react'
import Blogs from '../../blogs.json'

const Blog = () => {
    return (
        <>
            {Blogs.map(props => {
                return (
                    <article className="blog-n">
                        <img src={props.image} alt="props image" className="blog-img" />

                        <h5>{props.title}</h5>

                        <p>{props.summary}</p>

                        <button type="button">
                            <a href={props.link}>
                                Read More <span>&rarr;</span>
                            </a>
                        </button>
                    </article>
                );
            })}
        </>
    )
}

export default Blog

/*
export default class Blog extends Component {
    render() {
        const { img, title, text, link } = this.props.blog;

        return (
            <article className="blog-n">
                <img src={img} alt="props image" className="blog-img" />
                <h5>{title}</h5>
                <p>{text}</p>
                <button type="button">
                    <a href={link}>
                        Read More <span>&rarr;</span>
                    </a>
                </button>
            </article>
        );
    }
}*/