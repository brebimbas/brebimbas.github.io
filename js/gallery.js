// Activate the image gallery
// The main task is to attach and event listener to each image in the gallery
// and respond appropiately on click
function activateGallery(){
 let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
 let mainImage  = document.querySelector("#gallery-photo img");

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(){
        // Set the click image as main image.
        let newImageSrc = thumbnail.dataset.largeVersion;
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", thumbnail.alt);

        // Change which image is current
        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");

        // Update image info
        let galleryInfo = document.querySelector("#gallery-info");
        let title       = galleryInfo.querySelector(".title");
        let description = galleryInfo.querySelector(".description");

        title.innerHTML       = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
    });
});
}
