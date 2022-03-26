import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import "./Header.css"
import { Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';

function Header({ openSidebar }) {

    return (

        <div className="header_body">
            <div className="header_top">
                <div className="header_ham">
                    <IconButton onClick={openSidebar}><MenuOutlinedIcon className="header__ham" /></IconButton>
                    <Image className="header__logo" src="/images/logo main.png" />
                </div>

                <InputGroup className="m-3  header__search">
                    <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary  opacity-60" id="button-addon2">
                        <SearchIcon style={{ fontSize: 28 }} />
                    </Button>
                </InputGroup>

                <div className="header_icons">
                    <IconButton><Image className="header__icon" src="/images/user.svg" /></IconButton>
                    <IconButton><Image className="header__icon" src="/images/cart.svg" /></IconButton>
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