import React from 'react';
export default function Nav() { 

    return (
        <>
        <nav className = "navbar">
            <a href = "/" className = "nav-branding"> Paradise </a>
                <ul className = "nav-menu">
                    <li className = "nav-item"> 
                        <a
                            to= "/"
                            className="nav-link"
                        >
                            Home 
                        </a>                       
                    </li>
                    <li className = "nav-item"> 
                        <a
                            to= "/about"
                            className = "nav-link"
                        >
                            About 
                        </a>  
                    </li>
                    <li className = "nav-item"> 
                        <a 
                            to= "/work"
                            className ="nav-link"
                        >
                            Work 
                        </a> 
                    </li>
                </ul>
        </nav>
        
        </>
    )
}