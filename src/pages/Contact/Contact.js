import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-7 col-lg-7 col-xl-7">
                        <div className="contact-form">
                            <h4>Contact</h4>

                            <p>For any question or feedback feel free to contact us!</p>

                            <form action="" method="post">
                                <div className="d-flex justify-between mb-3">
                                    <input type="text" className="w-45" placeholder="Name" id="name" name="name" required value="" />

                                    <input type="text" className="w-45" placeholder="Email" id="email" name="email" required value="" />
                                </div>

                                <div className="d-flex justify-between mb-3">
                                    <input type="text" className="w-100" placeholder="Phone" id="phone" name="phone" value="" />
                                </div>

                                <div className="d-flex justify-between mb-3">
                                    <textarea name="message" className="w-100" placeholder="Message" rows="8"></textarea>
                                </div>

                                <div className="d-flex justify-end">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-5 col-xl-5 align-self-center">
                        <div className="w-100 info">
                            <h1>We are your One-Stop-Shop</h1>

                            <p>Do you know that we offer all existing Australian carrier's right here on our website?</p>

                            <p>Simply go to our search filter, enter your search criteria and let us find what you're looking for within just seconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
