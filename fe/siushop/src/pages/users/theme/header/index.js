import { memo, useState } from "react";
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { fomatter } from "utils/fomatter";
import { ROUTER } from "utils/router";
import "./styles.scss";
const Header = () =>{
    const [menus, setMenus] = useState ([
        {
            name: "Trang chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: "",
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child:[
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Rau củ",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);
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
                <div className="header_logo">
                    <h1>Siu Shop</h1>
                </div>
            </div>
            <div className="col-xl-6">
                
                <nav className="header-menu">
                    <ul>
                        {
                            menus?.map((menu, menuKey)=>(
                                <li key={menuKey} className={menuKey === 0 ?"active" : ""}><Link to={menu?.path}>{menu?.name}</Link></li>
                            ))
                        }
                    </ul>
                </nav>

            </div>
            <div className="col-xl-3">
                <div className="header-cart">
                    <div className="header-cart-price">
                        <span>{fomatter(1000000)}</span>
                    </div>
                    <div>
                    <ul>
                        <li>
                            <Link to="#">
                                <AiOutlineShoppingCart />
                                <span>5</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;

};

export default memo(Header);