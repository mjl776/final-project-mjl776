import { Route, Routes } from "react-router-dom";

export default function Nav() {
    return (
        <>
        <nav className = "navbar">
            <a href = "/" className = "nav-branding"> Paradise </a>
                <ul className = "nav-menu">
                    <li className = "nav-item"> 
                        <a 
                            href= "/"
                            className="nav-link"
                        >
                            Home 
                        </a>                       
                    </li>
                    <li className = "nav-item"> 
                        <a 
                            href= "/about"
                            className = "nav-link"
                        >
                            About 
                        </a>  
                    </li>
                    <li className = "nav-item"> 
                        <a 
                            href= "/work"
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