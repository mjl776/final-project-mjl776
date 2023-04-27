import { useEffect, useState } from "react";
import auth from "../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth";

export default function authHandler() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            setLoading(true);
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(false);
            }
        })
    })

    return { user, loading };

}
