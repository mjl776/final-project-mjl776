import Nav from './nav.js'
import React from 'react';
import { useRouter } from 'next/router'
import clientPromise from '../lib/mongo.js'

export default function HomePage() {
    const router = useRouter()

    return (
        <div className = "container">
            <Nav></Nav>
        </div>
    )
}


export async function getServerSideProps(context) {
    try {
        const client = await clientPromise;
        console.log(process.env.secrets);
        const db = await client.db();
        const dbProps = {}
        return {
            props: { dbProps: JSON.parse(JSON.stringify(dbProps)) } 
        };
    }
    catch(err) {
        console.error(err);
    }
};