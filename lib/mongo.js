import mongoose from 'mongoose'


if (!process.env.MONGODB_URI) {
    throw new Error('Invalid env variable');
}

const options = {};

if (process.env.NODE_ENV === 'development') {

    if (!globalThis._mongoClientPromise) {
        client = async () => await mongoose.connect(process.env.MONGODB_URI, options);
        global._mongoClientPromise = client;
    }
    clientPromise = global._mongoClientPromise;
} 

else { 
    clientPromise = async () => await mongoose.connect(process.env.MONGODB_URI, options);;
}

export default clientPromise;


