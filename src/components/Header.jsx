import React from 'react';
import './style/Header.css'

const Header = () => {
    return (
        <div>
             <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder" id='header-text'>Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0" id='p-text'>Accesories for Men & Women</p>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;