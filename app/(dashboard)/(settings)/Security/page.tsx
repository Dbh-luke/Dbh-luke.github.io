import SubNav from "../../../_components/subNav";
import style from "./page.module.scss"
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function Security() {
    return (
        <section className={style.main}>
            <SubNav num={2}/>
            <div id="message">
                <div id="securityProgressCircle">
                    <svg width="50" height="50" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="12.5" fill="none" stroke="#363a3e" stroke-width="3"
                        ></circle>
                        <circle cx="25" cy="25" r="12.5" fill="none" stroke="#4372dd" stroke-width="3" stroke-dasharray="65" strokeLinecap="round"
                        ></circle>
                    </svg>
                </div>
                <div>
                    <h1>Your account security is 90%</h1>
                    <p>Please review your account security settings regularly and update your password.</p>
                </div>
                <div>
                    <button>Dismiss</button>
                    <button>Review security</button>
                </div>
            </div>
            <div id="basics">
                <h1>Basics</h1>
                <div id="password">
                    <div>
                        <h2>Password</h2>
                        <p>Set a password to protect your account.</p>
                    </div>
                    <div>
                        <input type="password" name="pass" id="pass" value="Passwordplacehold" readOnly/>
                        <p><FaRegCheckCircle /> Very secure</p>
                    </div>
                    <div>
                        <button>Edit</button>
                    </div>
                </div>
                <div id="two-step">
                    <div>
                        <h2>Two-step verification</h2>
                        <p>We recommend requiring a verification <br /> code in addition to your password.</p>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" disabled checked/>
                            <span></span>
                        </label>
                        <p>Two-step verification</p>
                    </div>
                    <div>
                        <button>Edit</button>    
                    </div>    
                </div>
            </div>
            <div id="devices">
                <div>
                    <div>
                        <h2>Browsers and devices</h2>
                        <p>These browsers and devices are currently signed in to your account. Remove all unauthorized devices.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                <Image 
                                src="/brave.png"
                                width={25}
                                height={25}
                                alt="Brave"
                                />
                            </div>
                        </div>
                        <p>Brave on Mac OS X</p>
                        <div>
                            <Image 
                            src="/vietnam.png"
                            height={25}
                            width={25}
                            alt="Vietnam"
                            />
                            <p>Ninh Binh, Vietnam</p>
                        </div>
                        <div>
                            <p>Current session</p>
                        </div>
                        <div>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <FaApple />
                            </div>
                        </div>
                        <p>Luke's MacBook Pro</p>
                        <div>
                            <Image 
                            src="/vietnam.png"
                            height={25}
                            width={25}
                            alt="Vietnam"
                            />
                            <p>Ninh Binh, Vietnam</p>
                        </div>
                        <div>
                            <p>Current session</p>
                        </div>
                        <div>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <Image 
                                src="/brave.png"
                                width={25}
                                height={25}
                                alt="Brave"
                                />
                            </div>
                        </div>
                        <p>Brave on Mac OS X</p>
                        <div>
                            <Image 
                            src="/mexico.png"
                            height={25}
                            width={25}
                            alt="Mexico"
                            />
                            <p>Mexico City, Mexico</p>
                        </div>
                        <div>
                            <p>1 month ago</p>
                        </div>
                        <div>
                            <IoTrashOutline />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <FaApple />
                            </div>
                        </div>
                        <p>Luke's MacBook Pro</p>
                        <div>
                            <Image 
                            src="/mexico.png"
                            height={25}
                            width={25}
                            alt="Mexico"
                            />
                            <p>Mexico City, Mexico</p>
                        </div>
                        <div>
                            <p>1 month ago</p>
                        </div>
                        <div>
                            <IoTrashOutline />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


