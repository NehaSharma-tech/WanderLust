const Listing= require('../models/listing.js')
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken= process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index= async(req, res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs", { allListings })
};

module.exports.searchListings = async (req, res) => {
    const { q, category } = req.query;
    let filter = {};

    if (q && q.trim()) {
        filter.$or = [
            { title: { $regex: q, $options: "i" } },
            { location: { $regex: q, $options: "i" } },
            { country: { $regex: q, $options: "i" } },
            { category: { $regex: q, $options: "i" } }
        ];
    }

    if (category) {
        filter.category = category; 
    }

    if (Object.keys(filter).length === 0) {
        req.flash("error", "Please enter a search term");
        return res.redirect("/listings");
    }

    const allListings = await Listing.find(filter);

    res.render("listings/index.ejs", {
        allListings,
        searchText: q,
        selectedCategory: category
    });
};


module.exports.filterListings = async (req, res) => {
    const { category } = req.query;

    let listings;

    if (!category || category === "all") {
        listings = await Listing.find({});
    } else {
        listings = await Listing.find({
            category: { $in: [category] }
        });
    }

    res.json(listings);
};

module.exports.renderNewForm=(req, res)=>{
    res.render("listings/new.ejs")
};

module.exports.showListing= async(req, res)=>{
    let { id }= req.params;
    const listing= await Listing.findById(id)
    .populate({path: "reviews", populate: {path: "author"}})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing= async(req, res, next)=>{
    if (!Array.isArray(req.body.listing.category)) {
        req.body.listing.category = [req.body.listing.category];
    }
    
    let response =await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
    })
    .send()
    
    let url= req.file.secure_url;
    let filename= req.file.public_id;
    const newListing= new Listing(req.body.listing);
    newListing.owner= res.locals.currUser._id;
    newListing.image= { url , filename};
    newListing.geometry= response.body.features[0].geometry 
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm= async(req, res)=>{
    let { id }= req.params;
    let listing= await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings")
    }
    let originalImageUrl= listing.image.url;
    if(originalImageUrl.includes("unsplash.com")){
        originalImageUrl= originalImageUrl.replace("w=800&q=60", "w=300&h=200&q=50");
    }
    originalImageUrl= originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl })
};

module.exports.updateListing= async(req, res)=>{
    let { id }= req.params;
    let listing= await Listing.findByIdAndUpdate(id, {...req.body.listing}, {new: true});
    if(typeof req.file !== "undefined"){
        let url= req.file.secure_url;
        let filename= req.file.public_id;
        listing.image= { url , filename};
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`)
};

module.exports.destroyListing= async(req, res)=>{
    let { id }= req.params;
    let deletedList= await Listing.findByIdAndDelete(id);
    console.log(deletedList);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings")
};
