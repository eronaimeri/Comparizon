import React from 'react'
import './Blogs.css'
import Story1 from './BlogsPages/Story1'
import Blog from './Blog'

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blogs-header"></div>

            <div className="news-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8 m-auto">
                            <div className="d-inline-flex blog-1">
                                <div className="blog-1-bg"></div>

                                <div className="blog-1-content">
                                    <span>Featured</span>

                                    <h5>Samsung Galaxy Note 10 vs Apple iPhone XS: The Weigh in</h5>

                                    <p className="mb-0">Apple's iPhone and Samsung's Galaxy S line are classic rivals, but when it comes to super-premium, super-expensive phones, you also have to consider Samsung's Galaxy Note.</p>

                                    <button><a href={Story1}>Read More <span>&rarr;</span></a></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-xl-4">
                            <div className="news-inbox">
                                <h5>Get the latest news in your inbox</h5>

                                <p>Subscribe to be the first to know when we publish updates and get the latest investment tips.</p>

                                <form method="post">
                                    <label htmlFor="">Email</label>

                                    <input type="email" className="email-subscribe" placeholder="aaronwhite@company.com" value="" />

                                    <button type="button" className="subscribe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <Blog />
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="more-content">
                                <button>More Content</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs

/*
function BlogList() {
    return (
        blogData.map(blog => {
            return (
                <Blog key={blog.id} blog={blog} links={blog.link}></Blog>
            );
        })
    );
}
*/