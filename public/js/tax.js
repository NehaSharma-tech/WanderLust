function initTax(){
    const taxSwitch = document.getElementById("switchCheckDefault");
    const basePrices = document.getElementsByClassName("base-price");
    const taxInfos = document.getElementsByClassName("tax-info");

    // initial render (before tax shown)
    for (let i = 0; i < basePrices.length; i++) {
        const price = Number(basePrices[i].dataset.price);

        basePrices[i].innerHTML =
            `₹ ${price.toLocaleString("en-IN")} /night`;

        taxInfos[i].style.display = "none";
    }

    taxSwitch.addEventListener("change", () => {
        for (let i = 0; i < basePrices.length; i++) {
            const price = Number(basePrices[i].dataset.price);
            const taxPrice = Math.round(price * 1.18);

            if (taxSwitch.checked) {
                // show AFTER tax only
                basePrices[i].style.display = "none";
                taxInfos[i].innerHTML =
                    `₹ ${taxPrice.toLocaleString("en-IN")} /night`;
                taxInfos[i].style.display = "inline";
            } else {
                // show BEFORE tax only
                taxInfos[i].style.display = "none";
                basePrices[i].style.display = "inline";
            }
        }
    });
}

initTax();