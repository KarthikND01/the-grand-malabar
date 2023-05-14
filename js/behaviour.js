function previewImage(imageUrl) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  popupImage.src = imageUrl;
  console.log(imageUrl);
  popup.style.display = "block";
}

function closeImagePopup() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}

window.addEventListener("resize", function () {
  var heading = document.getElementById("responsiveHeading");
  var windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    heading.innerHTML =
      "<i class='fa fa-utensils me-3'></i>The Grand Malabar<br>Indian Cuisine";
  } else {
    heading.innerHTML =
      "<i class='fa fa-utensils me-3'></i>The Grand Malabar Indian Cuisine";
  }
});

function initiateUI() {
  var heading = document.getElementById("responsiveHeading");
  var windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    heading.innerHTML =
      "<i class='fa fa-utensils me-3'></i>The Grand Malabar<br>Indian Cuisine";
  } else {
    heading.innerHTML =
      "<i class='fa fa-utensils me-3'></i>The Grand Malabar Indian Cuisine";
  }
}