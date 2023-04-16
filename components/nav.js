import React from 'react';
import Link from 'next/link'
export default function Nav() { 
    return (
        <nav className = "navbar">
            <a href = "/" className = "nav-branding"> Paradise </a>
                <ul className = "nav-menu">
                    <li className = "nav-item"> 
                        <Link
                            href= "/"
                            className="nav-link"
                        >
                            Home 
                        </Link>                       
                    </li>
                    <li className = "nav-item"> 
                        <Link
                            href= "/about"
                            className = "nav-link"
                        >
                            About 
                        </Link>  
                    </li>
                    <li className = "nav-item"> 
                        <Link
                            href= "/auth"
                            className ="nav-link"
                        >
                            Sign Up 
                        </Link> 
                    </li>
                </ul>
        </nav>
    )
}