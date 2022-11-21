// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Connection = async () => {
    //const URL = `mongodb://${username}:${password}@crud-app-shard-00-00.fyf2n.mongodb.net:27017,crud-app-shard-00-01.fyf2n.mongodb.net:27017,crud-app-shard-00-02.fyf2n.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-rz0rvg-shard-0&authSource=admin&retryWrites=true&w=majority`
    const URL = `mongodb+srv://shippigo:shippigo123@cluster1.fqwgctr.mongodb.net/?retryWrites=true&w=majority`
    // const URL = 'mongodb://localhost:27017/vidly';

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error', error.message);
    }
}



export default Connection;


// mongoose.connect('mongodb://localhost/playground')  // playground is collections 
// .then(()=>console.log('Connected to MOngo DB'))
// .catch(error=>console.error('Could not connect to MOngoDB',err))