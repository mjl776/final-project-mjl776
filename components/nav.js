import React from 'react';
import Link from 'next/link'
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function Nav() { 
    const router = useRouter()
    const [user, setUser] = useState({});
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
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
                                href= "/auth"
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