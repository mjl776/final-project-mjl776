import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router"
import auth from "../firebase/firebase"
import styles from '../styles/homepage.module.css'

export default function HomePage() {
    const [user, setUser] = useState({});
    const router = useRouter()
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    });

    async function signIn() {
        router.push('/signIn')
    }

    async function createPost() {
        router.push('/createPost')
    }

    return (
        <div>
            { !user ?
                <div className={ styles['welcome-text'] }>
                    Hello welcome to the Paradise travel site! Please sign in or sign up! 
                    <div>
                        <button onClick= {signIn}>
                            Sign In
                        </button>
                    </div>  
                </div> 
                : (
                    <div className={ styles.posts }>
                        <button onClick= { createPost }>
                            Add post
                        </button>
                        <div>
                            Here are the Travel Blog Posts for today!  
                        </div>
                    </div>
                )}
        </div>
    );
}

