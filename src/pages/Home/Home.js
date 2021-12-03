import React from 'react'
import './Home.css'
import LatestNews from './LatestNews'
import Slider from '../../components/Slider/Slider'
import Slider2 from '../../components/SliderOffers/SliderOffers'
import tick from '../../images/icons/tick.svg'
import unlimitedminutes from '../../images/icons/unlimitedminutes.svg'
import sms from '../../images/icons/sms.svg'
import unlimitedgb from '../../images/icons/unlimitedgb.svg'
import unlimitedcost from '../../images/icons/unlimitedcost.svg'
import howitworks from '../../images/icons/howitworks.svg'
import antenna from '../../images/icons/antenna.svg'
import flexiblesettings from '../../images/icons/flexiblesettings.svg'
import sim from '../../images/icons/sim.svg'
import freetransparent from '../../images/icons/freetransparent.svg'
import experience from '../../images/icons/experience.svg'
import search from '../../images/icons/searchicon.svg'
import map from '../../images/icons/map.svg'
import arrowright from '../../images/icons/arrow.svg'
import arrowleft from '../../images/icons/arrowleft.svg'
import testimonialprofile from '../../images/images/testimonial.png'
import blackarrow from '../../images/icons/blackarrow.svg'
import MinRangeSlider from '../../components/RangeSlider/MinSlider'
import SmsRangeSlider from '../../components/RangeSlider/SmsSlider'
import GbRangeSlider from '../../components/RangeSlider/GbSlider'
import CostRangeSlider from '../../components/RangeSlider/CostSlider'

const Home = () => {
    return (
        <div className="homepage">
            <header>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-7 col-lg-7 col-xl-7">
                            <h1>Compare and save</h1>

                            <div className="d-inline-flex mb-5">
                                <img src={tick} alt="tick" id="tick" />

                                <div className="ml-4">
                                    <div className="d-inline-flex font-weight-bold">
                                        <p>Exclusive special rates</p>

                                        <span>NEW</span>
                                    </div>

                                    <p>Particularly favourable mobile phone plans</p>
                                </div>
                            </div>

                            <div className="d-inline-flex mb-5">
                                <img src={tick} alt="tick" id="tick" />

                                <div className="ml-4">
                                    <p className="font-weight-bold">Detailed market comparison - constantly updated</p>

                                    <p>Compare around 350 mobile phone tariffs from over 30 providers field="minutes"</p>
                                </div>
                            </div>

                            <div className="d-inline-flex mb-5">
                                <img src={tick} alt="tick" id="tick" />

                                <div className="ml-4">
                                    <p className="font-weight-bold">Additional Packages & Refill</p>

                                    <p>Intelligent selection of additional packages for even cheaper rates</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4>Quick search</h4>

                                    <div>
                                        <p>Monthly usage</p>

                                        <div className="mb-4" datatype="range">
                                            <div>
                                                <img src={unlimitedminutes} alt="unlimited minutes" className="card-img" />

                                                <span>0 - Unlimited minutes</span>
                                            </div>

                                            <div className="ml-1">
                                                <MinRangeSlider />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div>
                                                <img src={sms} alt="unlimited sms" className="card-img" />

                                                <span>0 - Unlimited sms</span>
                                            </div>

                                            <div className="ml-1">
                                                <SmsRangeSlider />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div>
                                                <img src={unlimitedgb} alt="unlimited gb" className="card-img" />

                                                <span>0 Gb - Unlimited Gb</span>
                                            </div>

                                            <div className="ml-1">
                                                <GbRangeSlider />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div>
                                                <img src={unlimitedcost} alt="unlimited cost" className="card-img" />

                                                <span>$0 - Unlimited cost</span>
                                            </div>

                                            <div className="ml-1">
                                                <CostRangeSlider />
                                            </div>
                                        </div>

                                        <a href="/Plans" className="header-search-btn">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="partners">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>

            <div className="special-offer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Special Offer</h1>
                        </div>
                    </div>

                    <div className="row">
                        <Slider2 />
                    </div>

                    <div className="row">
                        <div className="col">
                            <a href="/Plans">Show all offers</a>

                            <img src={blackarrow} className="arrow" />
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="why-sign-up">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Why sign up using Comparizon?</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 d-inline-flex">
                            <img src={flexiblesettings} alt="flexible settings" className="orange-icons" />

                            <div>
                                <p><b>Flexible settings</b></p>

                                <p>Tell us what you would like and we do the rest. Our filters allow the best results.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 d-inline-flex">
                            <img src={sim} alt="mobile specialists" className="orange-icons" />

                            <div>
                                <p><b>Mobile specialists</b></p>

                                <p>Complex plans require special know-how and industry knowledge. We have them both.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 d-inline-flex">
                            <img src={freetransparent} alt="free and transparent" className="orange-icons" />

                            <div>
                                <p><b>Free and transparent</b></p>

                                <p>Comparizon is absolutely free. We'll show you how high the effective cost of a fare really is.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6 d-inline-flex">
                            <img src={experience} alt="experience" className="orange-icons" />

                            <div>
                                <p><b>10 years experience</b></p>

                                <p>Our comparisons are based on over 10 years of experience and we are here to help.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <h2>Comparizon is trusted by over 4000 people</h2>

                            <div>
                                <img src={arrowright} className="arrow mb-3" />
                            </div>

                            <div>
                                <img src={arrowleft} className="arrow" />
                            </div>
                        </div>

                        <div className="col-md-9 col-lg-9 col-xl-9">
                            <div className="w-100">
                                <div className="overflow-x-scroll-hidden d-inline-flex" id="testimonial-scroll">
                                    <div className="testimonial-item text-center">
                                        <img src={testimonialprofile} alt="testimmonial" className="testimonial-profile" />

                                        <p><b>Andrew Red</b></p>

                                        <p>Comparizon is absolutely amazing. Nulla porscue arcu eu suscipit tempor aliquet quis magna.</p>
                                    </div>

                                    <div className="testimonial-item text-center">
                                        <img src={testimonialprofile} alt="testimmonial" className="testimonial-profile" />

                                        <p><b>Andrew Red</b></p>

                                        <p>Comparizon is absolutely amazing. Nulla porscue arcu eu suscipit tempor aliquet quis magna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-coverage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h1>Test your coverage</h1>

                            <p>Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities - Sydney, Brisbane, Melbourne, Perth, Adelaide - are coastal. Its capital, Canberra, is inland.</p>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <form className="map-coverage-form">
                                <input type="text" placeholder="Enter your location" value="" />

                                <button type="search"><img src={search} alt="search" id="search-icon" /></button>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <img src={map} alt="map coverage" id="map" />
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="country-zones">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <ul>
                                            <li className="list-item-1">
                                                <div>
                                                    <p><b>Western Australia</b></p>

                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nesciunt?</p>
                                                </div>
                                            </li>

                                            <li className="list-item-2">
                                                <div>
                                                    <p><b>Northern Territory</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>

                                            <li className="list-item-3">
                                                <div>
                                                    <p><b>Queensland</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>

                                            <li className="list-item-4">
                                                <div>
                                                    <p><b>South Australia</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <ul>
                                            <li className="list-item-5">
                                                <div>
                                                    <p><b>Victoria</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>

                                            <li className="list-item-6">
                                                <div>
                                                    <p><b>New South Wels</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>

                                            <li className="list-item-7">
                                                <div>
                                                    <p><b>Tasmania</b></p>

                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus?</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="latest-news">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Latest News</h1>
                        </div>
                    </div>

                    <div className="row">
                        <LatestNews />
                    </div>
                </div>
            </div>

            <hr />

            <div className="how-it-works mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>How it works</h1>

                            <p>Finding it difficult to choose a mobile plan that suits you? We can help! With thousands of plans from dozens of providers, choosing the right plan can be a daunting task.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="white-shadow d-inline-flex">
                                <img src={howitworks} alt="how it works" className="orange-icons" />

                                <p>At Comparizon, we present you with plans from 38 providers and give you the tools you need to find the plan that's right for you.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="white-shadow d-inline-flex">
                                <img src={antenna} alt="antenna" className="orange-icons" />

                                <p>We've taken care of the hard parts so you can focus on choosing the plan that best suits you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <a href="/Plans">View plans</a>

                            <img src={blackarrow} className="arrow" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sign-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <h1>Sign up for our latest deals, <br /> alerts and articles</h1>
                        </div>

                        <div className="col-md-7 col-lg-7 col-xl-7">
                            <form method="post">
                                <div>
                                    <label>Email</label>

                                    <input type="email" placeholder="aaronwhite@company.com" value="" />
                                </div>

                                <button type="button">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="need-help">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Need help choosing a wireless plan?</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <p>With the huge number of people currently using mobile phones and other devices, there are bound to be many individuals looking for a quality wireless service provider at any given time. While providers routinely have websites touting their services, it can be difficult to wade through the hype to find a carrier that will provide the services you need.</p>

                            <p><b>Discover the Benefits of a Comparison Site</b> <br /> Because it’s far simpler to select a provider if all the information is readily available and put in an easy-to-read format, Comparizon has done just that—we’ve put all the major Australian carriers’ offerings together where you can easily see which companies provide the services and equipment you need.</p>

                            <p>It’s actually an easy concept to understand, but having the data readily available helps you, the consumer, more than providers. That simply means the advertising on their sites is less intimidating, as you’ll already know their overall price ranges, data capacities, plan types, and the brands of devices they offer. If you know a particular network is more reliable in your area, you can also segregate providers by network.</p>

                            <p><b>Is Price Important?</b> <br /> Of course it is. That’s why the data available at Comparizon allows consumers to select a price range that fits their budgets. There is a significant difference in the monthly fees of providers, so it’s always important to compare prices to avoid signing up for a service that won’t meet your needs just because their base fee is lower. It’s important to remember that finding the ideal wireless provider involves more than price alone.</p>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <p><b>Understanding Data Use</b> <br />If your main use for a mobile phone is talking, you’re no longer in the majority. Today’s users tend to listen to music, stream movies, and research the best local restaurants or other retailers using their mobile devices. When a plan only includes a limited amount of data each month and you stream a couple of movies, it’s likely there will be additional charges added for using extra data. Comparing the data limits and prices of various carriers allows users to find the least-expensive plan that still provides a comfortable amount of data.</p>

                            <p><b>Explore the Various Types of Plans Now Available</b> <br />Too many people sign up for plans without really understanding everything those plans include or, conversely, don’t include. Since a plan’s components impact the price, look at what’s included to make sure it has everything you need while, at the same time, doesn’t include features you’ll never use.</p>

                            <p>If you already have a phone you’re happy with and don’t want to pay for a new one, look for plans with a BYO option that allows users to keep the phone they’ve got. With the high cost of some smartphones, a BYO plan can save a lot of money.</p>

                            <p>Value-conscious consumers may want a prepaid option to control their use and keep expenses low. Prepaid options help users maintain a budget while still having the services they need at hand.</p>

                            <p>Pay-as-you-go is also another option some users look for. Again, this type of service is ideal for many people who have budget constraints and are looking for ways to control monthly usage.</p>

                            <p>Data-only plans are increasingly popular with users of tablets, and many carriers are now offering this type of plan. In addition, some carriers market tablets to users, which may be an easy way to acquire a tablet and service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home