const filters = document.querySelectorAll(".filter");
const container = document.getElementById("listing-container");

filters.forEach(filter => {
    filter.addEventListener("click", async () => {
        const category = filter.dataset.category;
        fetchListings(category);
    });
});

async function fetchListings(category) {
    try {
        const res = await fetch(`/listings/filter?category=${category}`);
        const listings = await res.json();
        renderListings(listings);
    } catch (err) {
        console.error(err);
    }
}

function renderListings(listings) {
    container.innerHTML = "";

    if (listings.length === 0) {
        container.innerHTML = `<p class="text-center mt-4">No listings found</p>`;
        return;
    }

    listings.forEach(listing => {
        container.innerHTML += `
            <a href="/listings/${listing._id}" class="listing-link">
                <div class="card col listing-card">
                    <img src="${listing.image.url}"
                         class="card-img-top"
                         style="height:20rem"
                         alt="listing_image">
                    <div class="card-body">
                        <p class="card-text">
                            <b>${listing.title}</b><br>
                            <span class="base-price" data-price="${listing.price}"></span>
                            <i class="tax-info"></i>
                        </p>
                    </div>
                </div>
            </a>
        `;
    });

    // Re-run tax logic for newly rendered cards
    if (typeof initTax === "function") {
        initTax();
    }
}
