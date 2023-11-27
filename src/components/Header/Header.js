import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Button,
} from '@mui/material';
import logo from "../../logo.png";
import "./Header.scss";
import { Search } from '@mui/icons-material';
import { searchRequest } from '../../redux/actions';

const Header = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(''); 

    const handleSearch = () => {
        dispatch(searchRequest(searchValue));
    };

    const handleInputChange = (e) => {
        setSearchValue(e.target.value); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchRequest(searchValue));
        }
    };

    return (
        <AppBar position="relative" color='default'>
            <Toolbar className='header-body' sx={{ py: 2 }}>
                <img src={logo} alt='Beta Limited' className='header-logo'/>

                <div style={{ flexGrow: 1 }}>
                    <div  className="header-search">
                        <IconButton aria-label="search">
                            <Search />
                        </IconButton>
                        <InputBase
                            placeholder="Search..."
                            style={{ marginRight: '10px' }}
                            className='search-input'
                            value={searchValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                        <Button color="inherit" className='search-button' onClick={handleSearch}>Search</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
