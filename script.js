const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => { logregBox.classList.add('active');
});


loginLink.addEventListener('click', () => { logregBox.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.p img');

    // Add click event listener to each image
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Get the source of the clicked image
            const src = this.getAttribute('src');
            
            // Create a pop-up container
            const popupContainer = document.createElement('div');
            popupContainer.classList.add('popup-container');

            // Create a pop-up image
            const popupImage = document.createElement('img');
            popupImage.src = src;
            popupImage.classList.add('popup-image');

            // Append the pop-up image to the pop-up container
            popupContainer.appendChild(popupImage);

            // Append the pop-up container to the body
            document.body.appendChild(popupContainer);

            // Close the pop-up when clicking anywhere on the page
            popupContainer.addEventListener('click', function() {
                popupContainer.remove();
            });
        });
    });
});

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

function goBack() {
    window.history.back();
}