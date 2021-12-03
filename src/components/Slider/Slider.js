import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Slider.css'
/**IMAGES */
import aldimobile from '../../images/images/aldimobile.png'
import cmobile from '../../images/images/cmobile.png'
import amaysim from '../../images/images/amaysim.jpg'
import bendigobank from '../../images/images/bendigobank.png'
import betterlife from '../../images/images/betterlife.png'
import boostmobile from '../../images/images/boostmobile.png'
import belong from '../../images/images/belong.png'
import clubtelco from '../../images/images/clubtelco.jpg'
import coles from '../../images/images/coles.png'
import commander from '../../images/images/commander.png'
import dodo from '../../images/images/dodo.png'
import exetel from '../../images/images/exetel.png'
import fibre2air from '../../images/images/fibre2air.png'
import gotalk from '../../images/images/gotalk.png'
import hellomobile from '../../images/images/hellomobile.png'
import iprimus from '../../images/images/iprimus.jpg'
import iinet from '../../images/images/iinet.png'
import internode from '../../images/images/internode.png'
import innotel from '../../images/images/innotel.png'
import jeeneemobile from '../../images/images/jeeneemobile.png'
import kisa from '../../images/images/kisa.png'
import kissmobile from '../../images/images/kissmobile.png'
import kogan from '../../images/images/kogan.png'
import lebara from '../../images/images/lebara.png'
import liveconnected from '../../images/images/liveconnected.png'
import lycamobile from '../../images/images/lycamobile.png'
import lyfmobile from '../../images/images/lyfmobile.png'
import deer from '../../images/images/deer.png'
import optus from '../../images/images/optus.png'
import ovo from '../../images/images/ovo.png'
import reward from '../../images/images/reward.png'
import southernphone from '../../images/images/southernphone.png'
import spintel from '../../images/images/spintel.png'
import startel from '../../images/images/startel.jpg'
import spinwheel from '../../images/images/spinwheel.png'
import t from '../../images/images/t.png'
import telechoice from '../../images/images/telechoice.png'
import think from '../../images/images/think.png'
import tpg from '../../images/images/tpg.png'
import vaya from '../../images/images/vaya.png'
import virgin from '../../images/images/virgin.png'
import vodafone from '../../images/images/vodafone.gif'
import woolworths from '../../images/images/woolworths.png'
import yomojo from '../../images/images/yomojo.png'

export default class SlickSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="slick-slider">
                <Slider {...settings}>
                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={aldimobile} alt="aldimobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={cmobile} alt="c mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={amaysim} alt="amaysim" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={bendigobank} alt="bendigo bank" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={betterlife} alt="betterlife" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={boostmobile} alt="boostmobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={belong} alt="belong" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={clubtelco} alt="club telco" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={coles} alt="coles" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={commander} alt="commander" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={dodo} alt="dodo" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={exetel} alt="exeter" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={fibre2air} alt="fibre 2 air" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={gotalk} alt="go talk" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={hellomobile} alt="hello mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={iprimus} alt="i prime" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={iinet} alt="ii node" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={internode} alt="internode" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={innotel} alt="innotel" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={jeeneemobile} alt="jeneer mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={kisa} alt="kisa" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={kissmobile} alt="kiss mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={kogan} alt="kogan" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={lebara} alt="lebara" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={liveconnected} alt="live connected" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={lycamobile} alt="luca mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={lyfmobile} alt="lyf mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={deer} alt="deer" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={optus} alt="optus" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={ovo} alt="ovo" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={reward} alt="reward mobile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={southernphone} alt="southern phone" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={spintel} alt="spintel" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={startel} alt="startel" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={spinwheel} alt="mobile carrier orange circle" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={t} alt="t" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={telechoice} alt="telechoice" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={think} alt="think mboile" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={tpg} alt="tpg" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={vaya} alt="vaya" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={virgin} alt="virginia" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={vodafone} alt="vodafone" />
                        </div>
                    </div>

                    <div>
                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={woolworths} alt="woolworths" />
                        </div>

                        <div className="slider-logo-wrapper d-inline-block">
                            <img src={yomojo} alt="yomojo" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
/**
 * <div className="slick-initialized" dir="ltr">
                                <button type="button" role="none" className="slick-arrow slick-prev"></button>

                                <div className="slick-list">
                                    <div className="slick-track">

                                    </div>
                                </div>

                                <button type="button" role="none" className="slick-arrow slick-next d-block"></button>
                            </div>
 */