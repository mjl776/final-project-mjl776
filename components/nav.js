import React from 'react';
import Link from 'next/link'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import auth from '../firebase/firebase'
import styles from "../styles/nav.module.css"

export default function Nav() { 
    const router = useRouter()
    const [user, setUser] = useState({});
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    function userOut () {
        signOut(auth).then(() => {
            // Sign-out successful
        }).catch((error) => {
            console.log(error);
        }).then(() => {
            router.push('/');
       })
    }

   return (
        <nav className = { styles['nav-bar'] }>
            <a href = "/" className = { styles['nav-branding'] }> Paradise </a>
                <ul className = { styles['nav-menu'] }>
                    <li className = { styles['nav-item'] }> 
                        <Link
                            href= "/"
                            className="nav-link"
                        >
                            Home 
                        </Link>                       
                    </li>
                    <li className = { styles['nav-item'] }> 
                        <Link
                            href= "/about"
                            className = "nav-link"
                        >
                            About 
                        </Link>  
                    </li>
                    { !user ?
                        <li className = { styles['nav-item'] }> 
                            <Link
                                href= "/authentication"
                                className ="nav-link"
                            >
                                Sign Up 
                            </Link> 
                        </li> 
                    : (
                        <li className = { styles['nav-item'] }> 
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