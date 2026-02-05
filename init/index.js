const mongoose= require ('mongoose');
const initData= require('./data.js');

const Listing= require('../models/listing.js');

main().then(()=>{
    console.log("connection succesfull")
}).catch(err=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust')
}


// let sampleListing= new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 2500,
//         location: "Calangute, Goa",
//         country: "India"
//     })

// sampleListing.save()

let initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner: "697fcd674b73c32e3c2176ac"}));
    await Listing.insertMany(initData.data);
    console.log("data is initialized");
}

initDB();

