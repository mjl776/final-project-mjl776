import { useRouter } from "next/router"
import styles from '../styles/homepage.module.css'
import authHandler from "../hooks/authHandler"


export default function HomePage() {
    const router = useRouter()
    let auth = authHandler();
    let user = null;

    if (auth.user && auth.loading == false) {
        user = auth.user;
    }

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

