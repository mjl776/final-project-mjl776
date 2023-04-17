import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid env variable');
}

const options = {};

let client; 
let clientPromise;

if (process.env.NODE_ENV === 'development') {

    if (!globalThis._mongoClientPromise) {
        client = new MongoClient(process.env.MONGODB_URI, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;

} 

else { 
    client =  new MongoClient(process.env.MONGODB_URI, options);
    clientPromise = client.connect();
}

export default clientPromise;


