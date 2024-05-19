import { memo } from "react";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { fomatter } from "utils/fomatter";
import "./styles.scss";

const Header = () =>{
    return <>
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-6 header-top-left">
                    <ul>
                        <li>
                            <AiOutlineMail/>hello@gmail.com
                        </li>
                        <li>
                            Miễn ship hóa đơn từ {fomatter(200000)}
                        </li>
                    </ul>
                </div>
                
                <div className="col-6 header-top-right">
                    
                    <ul>
                        <li>
                            <Link to={""}>
                                <AiOutlineFacebook/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiOutlineInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiOutlineLinkedin/>
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <AiOutlineGlobal />
                            </Link>
                        </li>

                        <li>
                            <Link to={""}>
                                <AiOutlineUser />
                            </Link>
                            <span>Đăng nhập</span>
                        </li>

                
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="row">
        <div className="col-xl-3">
            LOGO
        </div>
        <div className="col-xl-6">
            MENU
        </div>
        <div className="col-xl-3">
            PHONE
        </div>
    </div>
    </div>
    </>;

};

export default memo(Header);