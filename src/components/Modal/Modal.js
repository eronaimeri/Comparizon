import React from 'react'
import './Modal.css'
import MinRangeSlider from '../RangeSlider/MinSlider'
import SmsRangeSlider from '../RangeSlider/SmsSlider'
import GbRangeSlider from '../RangeSlider/GbSlider'
import CostRangeSlider from '../RangeSlider/CostSlider'

const Modal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal">
                <div className="modal-content">
                    <div><h4>Compare with your current plan</h4></div>

                    <div className="d-inline-flex">
                        <div className="carriers">
                            <p>Carriers</p>

                            <select name="" id="">
                                <option value="" className="option-cl">All</option>
                                <option value="AL" className="option-cl">ALDIMobile</option>
                                <option value="CM" className="option-cl">CMOBILE</option>
                                <option value="AM" className="option-cl">Amaysim</option>
                                <option value="BB" className="option-cl">Bendigo Bank Telco</option>
                                <option value="BM" className="option-cl">Better Mobile</option>
                                <option value="BO" className="option-cl">Boost Mobile</option>
                                <option value="CT" className="option-cl">Club Telco</option>
                                <option value="CM" className="option-cl">Coles Mobile</option>
                                <option value="CO" className="option-cl">Commander</option>
                                <option value="DO" className="option-cl">Dodo</option>
                                <option value="EX" className="option-cl">Exetel</option>
                                <option value="GO" className="option-cl">GoTalk</option>
                                <option value="HM" className="option-cl">Hello Mobile</option>
                                <option value="IP" className="option-cl">iPrimus</option>
                                <option value="II" className="option-cl">iinet</option>
                                <option value="IN" className="option-cl">Internode</option>
                                <option value="JM" className="option-cl">Jenee Mobile</option>
                                <option value="KP" className="option-cl">Kisa Phone</option>
                                <option value="KM" className="option-cl">Kiss Mobile</option>
                                <option value="KG" className="option-cl">Kogan Mobile</option>
                                <option value="LE" className="option-cl">Lebara</option>
                                <option value="LC" className="option-cl">Live Connected</option>
                                <option value="LM" className="option-cl">Lyca Mobile</option>
                                <option value="OP" className="option-cl">Optus</option>
                                <option value="OV" className="option-cl">Ovo</option>
                                <option value="RM" className="option-cl">Reward Mobile</option>
                                <option value="SO" className="option-cl">Southern Phone</option>
                                <option value="SP" className="option-cl">Spintel</option>
                                <option value="ST" className="option-cl">Startel</option>
                                <option value="TE" className="option-cl">Telechoice</option>
                                <option value="TL" className="option-cl">Telstra</option>
                                <option value="TH" className="option-cl">Think Mobile</option>
                                <option value="TP" className="option-cl">TPG</option>
                                <option value="VA" className="option-cl">Vaya Mobile</option>
                                <option value="VI" className="option-cl">Virgin</option>
                                <option value="VO" className="option-cl">Vodafone</option>
                                <option value="WO" className="option-cl">Woolworths</option>
                            </select>
                        </div>

                        <div className="networks">
                            <p>Networks</p>

                            <select name="" id="">
                                <option value="" className="option-cl">Not Sure</option>
                                <option value="VO" className="option-cl">Vodafone</option>
                                <option value="TL" className="option-cl">Telstra</option>
                                <option value="OP" className="option-cl">Optus</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-inline-flex">
                        <div className="w-50">
                            <div>
                                <span> 0 - Unlimited minutes</span>

                                <div>
                                    <MinRangeSlider />
                                </div>
                            </div>

                            <div>
                                <span>0 Gb - Unlimited Gb</span>

                                <div>
                                    <GbRangeSlider />
                                </div>
                            </div>
                        </div>

                        <div className="w-50">
                            <div>
                                <span>0 - Unlimited sms</span>

                                <div>
                                    <SmsRangeSlider />
                                </div>
                            </div>

                            <div>
                                <span>$0 - Unlimited cost</span>

                                <div>
                                    <CostRangeSlider />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center"><a href="/Plans">Compare</a></div>
                </div>

                <div className="modal-img"><button type="button" onClick={handleClose}>x</button></div>
            </div>
        </div>
    )
}

export default Modal