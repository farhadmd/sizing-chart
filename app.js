// Getting the container to edit the desired picture
const demoPictureContainer = document.getElementById("demo-picture-container");

let measurement = "INCH";
let category = "UNISEX";
displayPicture();

function displayInch(event) {
    measurement = event.target.innerText;
    displayPicture();
}

function displayCm(event) {
    measurement = event.target.innerText;
    displayPicture();
}

function displayUnisex(event) {
    category = event.target.innerText;
    displayPicture();
}

function displayWomens(event) {
    category = event.target.innerText;
    displayPicture();
}

function displayHoodies(event) {
    category = event.target.innerText;
    displayPicture();
}

// Displaying the picture
function displayPicture() {
    if (measurement.toLowerCase() === "inch") {
        if (category.toLowerCase() === "unisex") {
            // Location and Name of your picture
            insertPic("./img/unisex-inch.jpeg");
        } else if (category.toLowerCase() === "womens") {
            insertPic("./img/womens-inch.jpeg");
        } else if (category.toLowerCase() === "hoodies") {
            insertPic("./img/hoodies-inch.jpeg");
        }
    } else if (measurement.toLowerCase() === "cm") {
        if (category.toLowerCase() === "unisex") {
            insertPic("./img/unisex-inch.jpeg");
        } else if (category.toLowerCase() === "womens") {
            insertPic("./img/womens-inch.jpeg");
        } else if (category.toLowerCase() === "hoodies") {
            insertPic("./img/hoodies-inch.jpeg");
        }
    }
}

// Insert the picture
function insertPic(src) {
    demoPictureContainer.innerHTML = `
        <div>
            <img src="${src}" alt="Error" style="width: 100%;">
            The Photo is About ${category} in ${measurement}
        </div>
    `;
}

// Active elements of category
let categories = document.getElementsByClassName("category");

for(const cat of categories) {
    cat.addEventListener("click", function() {
        for(const c of categories) {
            c.classList.remove("active-category")
        }
        this.classList.add("active-category");
    });
};

// Active elements of measurement
let measurements = document.getElementsByClassName("measure");

for(const meas of measurements) {
    meas.addEventListener("click", function() {
        for(const m of measurements) {
            m.classList.remove("active-measure");
        }
        this.classList.add("active-measure");
    });
}