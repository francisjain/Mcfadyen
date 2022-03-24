import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import "./Header.css"
import { Image } from 'react-bootstrap';

function Header() {
    return (
        <div className="header_body">
            <div className="header_top">
                <div className="header_ham">
                    <MenuOutlinedIcon className="header__ham" />
                    <Image className="header__logo" src="/images/image 40.jpg" />
                </div>
                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon style={{ fontSize: 28 }} className="header__searchIcon" />
                </div>

                <div className="header_icons">
                    <Image className="header__icon" src="/images/user.svg" />
                    <Image className="header__icon" src="/images/cart.svg" />
                </div>
            </div>

            <div className="header_bottom pt-3">
                <div ><p >Bakery</p></div>
                <div ><p >Nuts & Seeds</p></div>
                <div ><p >Vegetables</p></div>
                <div ><p >Cheeses</p></div>
                <div ><p >Sea Food</p></div>
                <div ><p >Dairy</p></div>
                <div ><p >Meast</p></div>
                <div ><p >Snacks</p></div>
            </div>
        </div>
    )
}

export default Header