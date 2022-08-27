import mongoose from 'mongoose'

const connectDataBase = async(url) => {
    try {
        const pass = encodeURIComponent('Princ34hmeD?$@&')
        // const option = {
        //     user: 'codingwithprince',
        //     pass: pass,
        //     dbName: 'blog-app',
        //     authSource: 'admin'
        // }
        await mongoose.connect(url)
        console.log("MongoDB is connected..");
    } catch (error) {
        console.log(error);
    }
}


export default connectDataBase;