const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const Review= require("./review");

const listingSchema= new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String
    },
    image:{
        url: String,
        filename: String
    },
    price:{
        type: Number,
        required: true
    },
    location:{
        type: String
    },
    country:{
        type: String
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    geometry:{
        type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
        },
        coordinates: {
        type: [Number],
        required: true
        }
    },
    category:{
        type: [String],
        enum: ["trending",
        "rooms",
        "cities",
        "castles",
        "pools",
        "mountains",
        "arctic",
        "camping",
        "beach",
        "farms",
        "dome",
        "boats"],
        required: true,
       validate: {
        validator: v => Array.isArray(v) && v.length > 0,
        message: "Please select at least one category"
        }
    }
});

listingSchema.index({
    title: "text",
    location: "text",
    country: "text"
});


listingSchema.post("findOneAndDelete", async function(listing){
    if(listing && listing.reviews.length){
        Review.deleteMany({_id: {$in: listing.reviews}})
    }
})

const Listing= mongoose.model("Listing", listingSchema);

module.exports= Listing;


