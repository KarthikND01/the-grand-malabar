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
    heading.innerHTML = "<i class='fa fa-utensils me-3'></i>The Grand Malabar";
  } else {
    heading.innerHTML = "<i class='fa fa-utensils me-3'></i>The Grand Malabar";
  }
});

function initiateUI() {
  /* Set heading */
  var heading = document.getElementById("responsiveHeading");
  var windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    heading.innerHTML = "<i class='fa fa-utensils me-3'></i>The Grand Malabar";
  } else {
    heading.innerHTML = "<i class='fa fa-utensils me-3'></i>The Grand Malabar";
  }

  /* Set Menu Link Active */
  var element = document.getElementById("homeNav");
  element.classList.add("active");
}

function setActive(navigation) {
  console.log("Inside set");
  var navigarionArray = ["homeNav", "aboutNav", "menuNav", "contactNav"];
  navigarionArray.forEach((nav) => {
    var element = document.getElementById(nav);
    if (nav === navigation) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}