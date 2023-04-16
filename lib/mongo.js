import { mongoose } from 'mongoose'

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid env variable');
}

const options = {};

let client; 
let clientPromise;

if (process.env.NODE_ENV === 'development') {

    if (!globalThis._mongoClientPromise) {
        client = mongoose.connect(process.env.MONGODB_URI, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;

} 

else { 
    client = mongoose.connect(process.env.MONGODB_URI, options);
    clientPromise = client.connect();
}

export default clientPromise;


