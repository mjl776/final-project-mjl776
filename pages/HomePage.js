import { useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router"

export default function HomePage() {
    const [user, setUser] = useState({});
    const router = useRouter()

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

