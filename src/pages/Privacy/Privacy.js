import React from 'react'
import './Privacy.css'
import orangelogo from '../../images/images/orangelogo.png'

const Privacy = () => {
    return (
        <div className="terms">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="mt-5 mb-5">
                            <p className="text-center">
                                Compare and Save <br /> Find the mobile phone plan that suits you
                            </p>
                        </div>

                        <div className="d-flex flex-column privacy-content">
                            <div className="w-100">
                                <span>Privacy Statement</span>

                                <h4>Privacy Policy</h4>

                                <p>This web site https://www.comparizon.com.au is operated under exclusive license by OSE Consulting Pty Ltd (ABN: 47 614 166 719).</p>

                                <p>Comparizon is committed to ensuring we maintain your privacy by dealing with personal information in accordance with all applicable laws.</p>

                                <h4>WHAT DO WE DO WITH YOUR INFORMATION?</h4>

                                <p>When you browse our site (this Site), we automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>

                                <h4>CONSENT</h4>

                                <h6>How do you get my consent?</h6>

                                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>

                                <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>

                                <h6>How do I withdraw my consent?</h6>

                                <p>After you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at support@comparizon.com.au.</p>

                                <h4>DISCLOSURE</h4>

                                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>

                                <h4>THIRD-PARTY SERVICES</h4>

                                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>

                                <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>

                                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>

                                <p>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>

                                <p>Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>

                                <h4>LINKS</h4>

                                <p>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>

                                <h4>SECURITY</h4>

                                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>

                                <h4>CHANGES TO THIS PRIVACY POLICY</h4>

                                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>

                                <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>

                                <h4>QUESTIONS AND CONTACT INFORMATION</h4>

                                <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at support@comparizon.com.au.</p>
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

export default Privacy
