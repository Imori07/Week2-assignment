//IMAGES
const images = [
  {
    image: `https://preview.redd.it/a-minimalistic-view-of-the-mountains-1920x1080-v0-w3l0n3tdpsla1.jpg?auto=webp&s=f0239acd62eb5edeb3d0b9bddf6a7aa09c8303ae`,
    small: `https://preview.redd.it/a-minimalistic-view-of-the-mountains-1920x1080-v0-w3l0n3tdpsla1.jpg?auto=webp&s=f0239acd62eb5edeb3d0b9bddf6a7aa09c8303ae`,
    alt: ``,
  },
  {
    image: `https://wallpapers.com/images/hd/mountain-aesthetic-3pbvwsg3h7ksq2li.jpg`,
    small: `https://wallpapers.com/images/hd/mountain-aesthetic-3pbvwsg3h7ksq2li.jpg`,
    alt: ``,
  },
  {
    image: `https://wallpapers.com/images/featured/mountain-aesthetic-background-r903o7vp656qi52l.jpg`,
    small: `https://wallpapers.com/images/featured/mountain-aesthetic-background-r903o7vp656qi52l.jpg`,
    alt: ``,
  },
];

//i have asked ai to check over my code twice here as i could not get it to display onto main-display however i found the problem was mispelling and unfortunetely i spent a lot of time configuring things that didnt need changing. :(
//GRABBING ELEMENTS FROM HTML
let smallContainer = document.getElementById("small-container");
let currentImageIndex = 0;
const displayElem = document.getElementById("main-display");

function createSmallImage() {
  for (let image of images) {
    //CREATING NEW IMG ELEMENT
    let smallImg = document.createElement("img");

    //SETTING ATTRIBUTES FOR IMAGES
    smallImg.setAttribute("src", image.small);
    smallImg.setAttribute("alt", image.alt);
    smallImg.setAttribute("tabindex", "0");
    smallImg.classList.add("small-image");
    //APPENDING IMAGES TO CONTAINER
    smallContainer.appendChild(smallImg);

    //ADDING CLICK EVENT LISTENER TO SMALLIMAGE
    smallImg.addEventListener("click", function () {
      //WHEN CLICKED, CALL THE FUNCTION TO UPDATE THE MAIN DISPLAY
      updateDisplayImage(image.image);
    });
  }
}

function updateDisplayImage(imageUrl) {
  //GRAB THE CURRENTLY DISPLAYED IMAGE
  let currentDisplayImage = displayElem.firstChild;

  //IF THERE IS NOT IMAGE DISPLAYED
  if (!currentDisplayImage) {
    //CREATE NEW IMAGE ELEMENT
    currentDisplayImage = document.createElement("img");
    //APPEND THE NEW IMAGE ELEMENT TO THE MAIN DISPLAY
    displayElem.appendChild(currentDisplayImage);
  }

  //ai filled in this part along with another bit which i forgot im not entirely sure what it does  but i have a rough idea that it checks my image array and sets the current image? however it fixed my code. :)
  const matchingImage = images.find((img) => img.image === imageUrl);

  currentDisplayImage.setAttribute("src", imageUrl);
  currentDisplayImage.setAttribute(
    "alt",
    matchingImage ? matchingImage.alt : ""
  );
}

//CALLS THE FUNCTION THE CREATE SMALLIMAGE
createSmallImage();
