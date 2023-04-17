import React from 'react';
import Link from 'next/link'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import auth from '../firebase/firebase'
export default function Nav() { 
    const router = useRouter()
    const [user, setUser] = useState({});
    
    useEffect(() => {
        if (auth.auth.currentUser == null) {
            setUser(null); 
        }
        else {
            setUser(auth.auth.currentUser)
        }
    });

    function userOut () {
        signOut(auth).then(() => {
            // Sign-out successful
        }).catch((error) => {
            // An error happened.
            console.log(error);
        }).then(() => {
            router.push('/');
       })
    }

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
                    { !user ?
                        <li className = "nav-item"> 
                            <Link
                                href= "/authentication"
                                className ="nav-link"
                            >
                                Sign Up 
                            </Link> 
                        </li> 
                    : (
                        <li className = "nav-item"> 
                            <Link
                                href= "/auth"
                                className ="nav-link"
                                onClick= { userOut }
                            >
                                Sign Out 
                            </Link> 
                        </li>   
                    )
                    }   
                </ul>
        </nav>
    )
}