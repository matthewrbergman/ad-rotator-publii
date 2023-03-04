/*

Potential additions:
- Be able to specify a weight to each ad

*/


/* Start of UI Config */
// This section will get its values from the UI
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

const links = [
  "https://www.google.com",
  "https://www.bing.com",
  "https://www.amazon.com",
  "https://www.youtube.com",
  "https://www.microsoft.com"
];

const auto_update = true; // Should automatically pick a new image on a timer?
const update_time = 30000; // Delay 30 seconds before updating image

// Let user customize to prevent adblockers from automatically hiding element
adImageIdName = "ad-image"
adLinkIdName = "ad-link"

/* End of UI Config */


// HTML References
const adImage = document.getElementById(adImageIdName);
const adLink = document.getElementById(adLinkIdName);


// Function to pick a random image from the array
function getRandomAd() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Function to update the image displayed
function updateAd() {
  const ri = Math.floor(Math.random() * images.length);

  // TODO : check for out of bounds
  if (images[ri] !== "undefined" && links[ri] !== "undefined") {
    adImage.src = images[ri];
    adLink.href = links[ri]
  }
}

// Initial Display
updateAd();

// Set an interval to update the image every 5 seconds
setInterval(updateAd, 5000);
