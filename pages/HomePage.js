import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router"
import auth from "../firebase/firebase"

export default function HomePage() {
    const [user, setUser] = useState({});
    const router = useRouter()
    
    useEffect(() => {
        if (auth.auth.currentUser == null) {
            setUser(null); 
        }
        else {
            setUser(auth.auth.currentUser)
        }
    });

    async function signIn() {
        router.push('/signIn')
    }

    return (
        <div className="container">
            { !user ?
                <div className="welcome-text">
                    Hello welcome to the Paradise travel site! Please sign in or sign up! 
                    <div>
                        <button onClick= {signIn}>
                            Sign In
                        </button>
                    </div>  
                </div> 
                : (
                    <div className = "posts">
                        Here are the Travel Blog Posts for today!  
                    </div>
                )}
        </div>
    );
}

