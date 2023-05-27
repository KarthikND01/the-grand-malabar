function previewImage(imageUrl) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");
  popupImage.src = imageUrl;
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

function sendEmail(event) {
  event.preventDefault();
  var customerName = document.getElementById("customerName").value;
  var customerEmail = document.getElementById("customerEmail").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var message = document.getElementById("emailBody").value;
  var emailBody =
    "Customer Name : " +
    customerName +
    "<br/>" +
    "Customer Email Address : " +
    customerEmail +
    "<br/><br/> Message from Customer : <br/>" +
    message;
  Email.send({
    SecureToken: "83ae7cba-4147-45c3-9e4f-2336d55b7a04",
    To: "yourbrocoder@gmail.com",
    From: "allu381993@gmail.com",
    Subject: emailSubject,
    Body: emailBody,
  }).then((message) =>
    alert("Message sent. Thanks for sharing your feedback!")
  );
}