import React from 'react'
import './Disclaimer.css'
import orangelogo from '../../images/images/orangelogo.png'

const Disclaimer = () => {
    return (
        <div className="disclaimer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="mt-5 mb-5">
                            <p className="text-center">
                                Compare and Save <br /> Find the mobile phone plan that suits you
                            </p>
                        </div>

                        <div className="d-flex flex-column disclaimer-content">
                            <div className="w-100">
                                <span>Service Disclaimer</span>

                                <h6>Disclaimer for Comparizon</h6>

                                <p>If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@comparizon.com.au</p>

                                <p>Disclaimers for www.comparizon.com.au</p>

                                <p>All the information on this website is published in good faith and for general information purpose only. www.comparizon.com.au does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (www.comparizon.com.au), is strictly at your own risk. www.comparizon.com.au will not be liable for any losses and/or damages in connection with the use of our website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’. Please be also aware that when you leave our website (www.comparizon.com.au), other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</p>

                                <h6>Consent</h6>

                                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                                <h6>Update</h6>

                                <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                            </div>

                            <div className="w-100 orange-card">
                                <div className="w-100 text-center">
                                    <img src={orangelogo} alt="logo" className="orange-logo" />
                                </div>

                                <div className="w-100 text-center">
                                    <span className="text-center font-weight-bolder w-100"><b>We are your One-Stop-Shop</b></span>
                                </div>

                                <div className="w-100 mt-5 mb-5 grey-text">
                                    <p>We take out all the guess work for you</p>

                                    <p>Do you know that we offer all existing Australian carrier's right here on our website?</p>

                                    <p>Simply go to our search filter, enter your search data and let us find what your're looking for within just secodns.</p>

                                    <p>We want you to find the best and most affordable deals which is why we update our website on a daily basis so you don't MISS OUT!</p>
                                </div>

                                <div className="w-100 text-center">
                                    <a href="/Plans">Start Comparing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer
