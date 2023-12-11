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

/* window.addEventListener("resize", function () {
  var heading = document.getElementById("responsiveHeading");
  var windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    heading.innerHTML =
      "<img src='img/logo/yellow-logo.PNG' width='80' height='220'>The Grand Malabar";
  } else {
    heading.innerHTML =
      "<img src='img/logo/yellow-logo.PNG' width='80' height='220'>The Grand Malabar";
  }
});*/

function initiateUI() {
  /* Set heading 
  var heading = document.getElementById("responsiveHeading");
  var windowWidth = window.innerWidth;

  if (windowWidth < 480) {
    heading.innerHTML =
      "<img src='img/logo/yellow-logo.PNG' width='80' height='220'>The Grand Malabar";
  } else {
    heading.innerHTML =
      "<img src='img/logo/yellow-logo.PNG' width='80' height='220'></i>The Grand Malabar";
  }*/

  /* Set Menu Link Active */
  var element = document.getElementById("homeNav");
  element.classList.add("active");
}

function setActive(navigation) {
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

function openOnlineOrderLink() {
  window.open(
    "https://order.online/business/the-grand-malabar-indian-cuisine-11465867",
    "_blank"
  );
}

function openNewsLink() {
  window.open(
    "https://www.therecord.com/life/food-and-drink/culinary-adventure-awaits-at-the-grand-malabar-in-waterloo/article_90dd5efd-3ef5-55e1-b441-7176876fce59.html",
    "_blank"
  );
}

var popularFoodMenu = [
  {
    imageSrc: "img/puyyapla-choru.jpeg",
    title: "Puthiyapila Choru",
    price: "$18.99",
    description:
      "Ghee rice combo with chicken and beef sides and a treat served to sons-in-law",
  },
  {
    imageSrc: "img/beef-ularthiyathu.png",
    title: "Beef Ularthiyathu(Fry)",
    price: "$17.99",
    description:
      "Beef chunks, seasoned with Keralan spice, and sauteed to perfection.",
  },
  {
    imageSrc: "img/chicken-biriyani.jpeg",
    title: "Malabar Chicken Dum Biriyani",
    price: "$15.99",
    description:
      "Chicken - aromatic short-grain kaima rice, layered with herbs comes with pickle, and raita.",
  },
  {
    imageSrc: "img/chicken-biriyani.jpeg",
    title: "Kozhi (Chicken) Porichathu",
    price: "$14.99",
    description: "Malabar masala spiced and deep-fried.",
  },
  {
    imageSrc: "img/chicken-biriyani.jpeg",
    title: "Ghee Rice",
    price: "$10.99",
    description:
      "Aromatic ghee-flavored short-grain rice, served with yogurt raita, and pickle",
  },
  {
    imageSrc: "img/chicken-biriyani.jpeg",
    title: "Kozhi Varutharacha Curry",
    price: "$15.99",
    description: "Chicken in a roasted coconut masala",
  },
  // Add more items as needed
];

var specialFoodMenu = [
  {
    imageSrc: "img/beef-ularthiyathu.png",
    title: "Beef Ularthiyathu(Fry)",
    price: "$17.99",
    description:
      "Beef chunks, seasoned with Keralan spice, and sauteed to perfection.",
  },
  {
    imageSrc: "img/alappy-fish-curry.png",
    title: "Alleppey Chicken Curry",
    price: "$15.99",
    description: "Chicken chunks and in coconut milk gravy",
  },
  {
    imageSrc: "img/fish-nirvana.jpeg",
    title: "Fish Nirvana",
    price: "$20.99",
    description:
      "A Syrian catholic specialty and fried fish in a rich-coconut milk gravy",
  },
  {
    imageSrc: "img/kadai-chicken.png",
    title: "Kozhi Varutharacha Curry",
    price: "$15.99",
    description: "Chicken in a roasted coconut masala",
  },
  {
    imageSrc: "img/kadai-chicken.png",
    title: "Kozhi (Chicken) Porichathu",
    price: "$14.99",
    description: "Malabar masala spiced and deep fried",
  },
  {
    imageSrc: "img/kadai-chicken.png",
    title: "Naadan Beef Curry",
    price: "$16.99",
    description:
      "Beef, in chef's special spice blend, sauteed with onion, ginger, and garlic",
  },
  {
    imageSrc: "img/kadai-chicken.png",
    title: "Kadai Chicken",
    price: "$16.99",
    description:
      "Chicken in spicy tomato gravy, seasoned with fresh ground spices",
  },
  {
    imageSrc: "img/kadai-chicken.png",
    title: "Butter Chicken",
    price: "$16.99",
    description: "Chicken cubes in creamy tomato gravy",
  },
];

var lovelyFoodMenu = [
  {
    imageSrc: "img/special-juice.jpeg",
    title: "Gulab Jamun & Ice Cream",
    price: "$8.49",
    description: "Warm dumplings topped with ice cream",
  },
  {
    imageSrc: "img/special-juice.jpeg",
    title: "Pal Payasam (Rice Pudding)",
    price: "$6.99",
    description: "Delicately sweetened rice & milk dessert",
  },
  {
    imageSrc: "img/special-juice.jpeg",
    title: "Mango Lassi",
    price: "$6.99",
    description:
      "A delicious creamy drink with mango, yogurt, milk, a little sugar",
  },
  {
    imageSrc: "img/special-juice.jpeg",
    title: "Sulaimani Chai",
    price: "$2.49",
    description: "Warm sweet black tea, with lemon",
  },
];

// You can now use the 'beverageItems' array as needed in your JavaScript code.

// You can now use the 'foodItems' array as needed in your JavaScript code.

// Function to generate HTML from JSON
function generateFoodMenu(container, foodItems) {
  var container = document.getElementById(container);

  // Iterate through the JSON array
  for (var i = 0; i < foodItems.length; i++) {
    var item = foodItems[i];

    // Create HTML elements dynamically
    var colDiv = document.createElement("div");
    colDiv.className = "col-lg-6";

    var itemDiv = document.createElement("div");
    itemDiv.className = "d-flex align-items-center";

    var imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    imageContainer.setAttribute(
      "onclick",
      "previewImage('" + item.imageSrc + "')"
    );

    var img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = "";
    img.style.width = "80px";

    var textContainer = document.createElement("div");
    textContainer.className = "w-100 d-flex flex-column text-start ps-4";

    var titleAndPrice = document.createElement("h5");
    titleAndPrice.className =
      "d-flex justify-content-between border-bottom pb-2";

    var titleSpan = document.createElement("span");
    titleSpan.textContent = item.title;

    var priceSpan = document.createElement("span");
    priceSpan.className = "text-primary";
    priceSpan.textContent = item.price;

    var description = document.createElement("small");
    description.className = "fst-italic";
    description.textContent = item.description;

    // Append elements to the container
    titleAndPrice.appendChild(titleSpan);
    titleAndPrice.appendChild(priceSpan);

    textContainer.appendChild(titleAndPrice);
    textContainer.appendChild(description);

    imageContainer.appendChild(img);

    itemDiv.appendChild(imageContainer);
    itemDiv.appendChild(textContainer);

    colDiv.appendChild(itemDiv);

    container.appendChild(colDiv);
  }
}

// Call the function to generate HTML
generateFoodMenu("popularMenuDiv", popularFoodMenu);
generateFoodMenu("specialMenuDiv", specialFoodMenu);
generateFoodMenu("lovelyMenuDiv", lovelyFoodMenu);
