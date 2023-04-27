import clientPromise from '../../lib/mongo.js'
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react"

export default async function getUser (req, res) {

    try {
        // get user object 
        const client = await clientPromise;
        const db = await client.db("auth");
        const user = await db.collection("users").stats();
        console.log(user);
        return res.json({
            message: JSON.parse(json.stringify(user)),
            success: true
        })
    }
    catch (err) {
        return res.json({
            message: new Error(err).message,
            success: false
        });    
    }
}