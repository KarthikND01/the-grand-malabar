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

function initiateUI() {
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

function openCompleteMenuOptions(location) {
  if (location === "cambridge") {
    window.open("assets/pdf/TGM_Express_Menu.pdf", "_blank");
  } else if (location === "waterloo") {
    window.open("assets/pdf/TGM-Menu.pdf", "_blank");
  }
}

var popularFoodMenu = [
  {
    imageSrc: "img/menu/Malabar_Chicken_Dum_Biryani.jpeg",
    title: "Malabar Chicken Dum Biriyani",
    price: "$15.99",
    description:
      "Chicken - aromatic short-grain kaima rice, layered with herbs comes with pickle, and raita",
  },
  {
    imageSrc: "img/menu/Puthiyapila_Choru.jpeg",
    title: "Puthiyapila Choru",
    price: "$18.99",
    description:
      "Ghee rice combo with coconut dal, chicken fry and chicken / beef curry, a treat served to sons-in-law",
  },
  {
    imageSrc: "img/menu/Chemmeen_Shrimp_Fry.jpeg",
    title: "Chemmeen (shrimp) Fry",
    price: "$14.99",
    description: "Shrimp spiced and fried, Kerala-style",
  },
  {
    imageSrc: "img/menu/Fish_Nirvana.jpeg",
    title: "Fish Nirvana",
    price: "$19.99",
    description:
      "A Syrian Catholic specialty, Fried fish, pan-baked in a rich-coconut milk gravy",
  },
  {
    imageSrc: "img/menu/Alleppey_Chicken_Curry.jpeg",
    title: "Alleppey Chicken Curry",
    price: "$15.99",
    description: "Chicken, in coconut milk gravy, warm with spices",
  },
  {
    imageSrc: "img/menu/Beef_Ularthiyathu.jpeg",
    title: "Beef Ularthiyathu",
    price: "$17.99",
    description:
      "Beef chunks, seasoned with Keralan spice, and sauteed to perfection",
  },
  // Add more items as needed
];

var specialFoodMenu = [
  {
    imageSrc: "img/menu/Shrimp_lazeez.jpeg",
    title: "Shrimp Lazeez",
    price: "$18.99",
    description:
      "Creamy shrimp delicacy in an onion-tomato gravy, and warm spices",
  },
  {
    imageSrc: "img/menu/Kadai_Chicken.jpeg",
    title: "Kadai Chicken",
    price: "$15.99",
    description:
      "Chicken in spicy tomato gravy, seasoned with fresh ground spices",
  },
  {
    imageSrc: "img/menu/Goan_Chicken_Soup.jpeg",
    title: "Goan Chicken Soup",
    price: "$6.99",
    description: "Rich chicken soup with coconut milk",
  },
  {
    imageSrc: "img/menu/Kerala_Parotta.jpeg",
    title: "Kerala Parotta",
    price: "$3.49",
    description:
      "Layered flaky flatbread, a perfect accompaniment to our mains",
  },
  {
    imageSrc: "img/menu/Appam.jpeg",
    title: "Kallappam",
    price: "$1.99",
    description: "Coconut-flavoured rice pancakes",
  },
  {
    imageSrc: "img/menu/Beef_Ularthiyathu.jpeg",
    title: "Beef Ularthiyathu",
    price: "$17.99",
    description:
      "Beef chunks, seasoned with Keralan spice, and sauteed to perfection",
  },
  {
    imageSrc: "img/menu/Fish_Nirvana.jpeg",
    title: "Fish Nirvana",
    price: "$19.99",
    description:
      "A Syrian Catholic specialty, Fried fish, pan-baked in a rich-coconut milk gravy",
  },
  {
    imageSrc: "img/menu/Fish_Cutlets_2pc.jpeg",
    title: "Fish Cutlets",
    price: "$7.99",
    description:
      "Flaked, spiced fish, blended with spiced potatoes & crumb fried, served with Sarlas",
  },
  {
    imageSrc: "img/menu/Alleppey_Chicken_Curry.jpeg",
    title: "Alleppey Chicken Curry",
    price: "$15.99",
    description: "Chicken, in coconut milk gravy, warm with spices",
  },
];

var lovelyFoodMenu = [
  {
    imageSrc: "img/menu/TGMs_Falooda.jpeg",
    title: "TGM’s Falooda",
    price: "$10.99",
    description: "Ice cream topped trifle of fruit, vermicelli",
  },
  {
    imageSrc: "img/menu/Fruit_Salad_With_Ice_Cream.jpeg",
    title: "Fruit Salad with Ice cream",
    price: "$7.99",
    description: "Fruit medley with vanilla ice cream",
  },
  {
    imageSrc: "img/menu/Mango_Lassi.jpeg",
    title: "Mango Lassi",
    price: "$6.49",
    description:
      "A delicious creamy drink with mango, yogurt, milk, a little sugar",
  },
  {
    imageSrc: "img/menu/Special_juice.jpeg",
    title: "Pineapple Mojito",
    price: "$5.49",
    description:
      "A tropical delight combines fresh pineapple, mint and lime for a refreshingly sweet and zesty cocktail experience",
  },
  {
    imageSrc: "img/menu/Gulab-Jamun.jpeg",
    title: "Gulab Jamun & Ice cream",
    price: "$7.99",
    description: "Warm dumplings topped with ice cream",
  },
];

var specialFoodMenuCambridge = [
  {
    imageSrc: "img/menu/Chatti_Choru.jpeg",
    title: "Chatti Choru",
    price: "$19.99",
    description:
      "Kerala (Jaya) Rice with a lot of sides! Fish curry, Moru (Spiced curd) curry, a veggie side (a spiced stir fry), Kerala fish fry, a beef fry, pickle and pappadom, and finished with an omelette!",
  },
  {
    imageSrc: "img/menu/Malabar_Chicken_Dum_Biryani.jpeg",
    title: "Malabar Chicken Dum Biriyani",
    price: "$15.99",
    description:
      "Chicken - aromatic short-grain kaima rice, layered with herbs comes with pickle, and raita",
  },
  {
    imageSrc: "img/menu/Puthiyapila_Choru.jpeg",
    title: "Puthiyapila Choru",
    price: "$18.99",
    description:
      "Ghee rice combo with coconut dal, chicken fry and chicken / beef curry, a treat served to sons-in-law",
  },
  {
    imageSrc: "img/menu/Chicken_Mandhi.jpeg",
    title: "Chicken Mandhi",
    price: "$24.99(H) / $49.99(F)",
    description: "Aromatic Rice layered with smoky chicken",
  },
  {
    imageSrc: "img/menu/Fish_mandhi.jpeg",
    title: "Fish Mandhi",
    price: "$24.99(H)",
    description: "Aromatic Rice layered with fried fish",
  },
  {
    imageSrc: "img/menu/Kizhi_porotta.jpeg",
    title: "Beef Kizhi Parotta",
    price: "$16.99",
    description:
      "Kerala parottas layered with beef curry and aromatics, wrapped in a banana leaf and pan-baked",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Kappa Biriyani",
    price: "$15.99",
    description: "Yuca (tapioca) layered with beef curry",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Dosas",
    price: "$8.99 - $15.99",
    description:
      "variety of dosa. See the Full Menu link above for complete list",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Paal Kappa with beef or fish",
    price: "$16.99",
    description:
      "Tapioca (kappa) is cooked in creamy coconut milk and paired with spicy beef or fish curry",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Kappa w/ fish curry",
    price: "$14.99",
    description:
      "Comforting tapioca (kappa) with the rich flavors of a traditional fish curry",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Pazhampori (2) – beef combo",
    price: "$12.99",
    description:
      "A combination of the sweet, crispy Pazham pori (banana fritters) and the savory, spicy beef roast",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Butter chicken & rice combo",
    price: "$14.99",
    description: "Traditional Keralan rice meal (‘Oonu’) with sides ‘Kootan’)",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Kerala meals",
    price: "Veg $12.99 / Fish curry $14.99",
    description: "Creamy butter chicken with aromatic ghee rice",
  },
];

var curryMenuCambridge = [
  {
    imageSrc: "img/menu/Alleppey_Chicken_Curry.jpeg",
    title: "Alleppey Chicken Curry",
    price: "$15.99",
    description: "Chicken, in coconut milk gravy, warm with spices",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Mutton Curry",
    price: "$15.99",
    description:
      "Mutton, in Chef’s special spice blend, in an onion gravy, famously great with parotta",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Kozhi Varutharacha Curry",
    price: "$12.99",
    description: "Chicken in a roasted coconut masala",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Butter Chicken",
    price: "$12.99",
    description: "Chicken cubes in creamy tomato gravy",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Chicken Mappas",
    price: "$12.99",
    description: "Tender chicken cooked in a rich, creamy sauce",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Naadan Beef Curry",
    price: "$13.99",
    description:
      "Beef, in Chef’s special spice blend, in an onion gravy, famously great with parotta",
  },
  {
    imageSrc: "img/menu/Beef_Ularthiyathu.jpeg",
    title: "Beef Coconut Fry",
    price: "$15.99",
    description:
      "Beef chunks, seasoned with Keralan spice, and sauteed to perfection",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Beef Dry Fry (BDF)",
    price: "$15.99",
    description: "Beef strips, seasoned with Keralan spice, and pan fried",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Fish Mango Curry",
    price: "$13.99",
    description:
      "Fish curry in simmered coconut paste finished with sour raw mangos",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Kottayam Fish Curry",
    price: "$13.99",
    description:
      "(King Fish) Traditional Keralan spicy curry with sour kokum, finished with coconut milk",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Natholi(Anchovy) Fry",
    price: "$14.99",
    description: "Crispy fried anchovies in an aromatic batter",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Fish Tawa Fry",
    price: "$5.99",
    description: "King fish in a spicy Keralan masala, pan fried",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Pompano Tawa Fry",
    price: "$18.99",
    description: "Pompano in a spicy Keralan masala, pan fried",
  },
];

var snacksCambridge = [
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Pazham Pozhi",
    price: "$2.99",
    description: "Ripe plantains in a sweet batter",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Sugiyan",
    price: "$2.99",
    description:
      "Keralan snack made with green gram (moong dal) and jaggery, with a hint of cardamom",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Egg Puffs",
    price: "$2.99",
    description:
      "Crispy, flaky puff pastry filled with a savory mixture of hard-boiled eggs and spiced onions",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Masala Bonda",
    price: "$12.99",
    description:
      "Batter fried mixture of spicy mixture of potatoes, onions, and chilies",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Veg Cutlet",
    price: "$2.49",
    description: "A patty of spiced potatoes, packs a punch!",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Ulli (Onion) Vada",
    price: "$2.49",
    description: "Golden fried mixture of onions, with mild spices",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Beef Cutlet",
    price: "$2.99",
    description: "A patty of spiced potatoes and shredded beef",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Onion Pakoda (5)",
    price: "$2.49",
    description: "Golden fried mixture of onions, in Lentil flour",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Parippu Vada",
    price: "$2.49",
    description: "Crispy fried lentil fritters, made from Toor dal",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Chicken / Beef Samosa (2 pcs)",
    price: "$2.99",
    description: "Golden fried dough triangles with a spiced filling",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Uzhunnu (Medhu) Vada",
    price: "$2.49",
    description:
      "Urad dal (black lentils) fritters with, onions, chilies, and spices",
  },
  {
    imageSrc: "img/menu/no_image.jpeg",
    title: "Unnakaya 2 Pcs",
    price: "$2.99",
    description: "Ripe Plantain Mash with a Coconut Ghee filling",
  },
];

function sendEmail(event) {
  event.preventDefault();
  var customerName = document.getElementById("customerName").value;
  var customerEmail = document.getElementById("customerEmail").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var message = document.getElementById("emailBody").value;

  if (!customerName || !customerEmail || !emailSubject || !message) {
    alert("Please fill out all the fields before sending the message. Thanks!");
  } else {
    var emailBody =
      "<b>Customer Name : </b>" +
      customerName +
      "<br/>" +
      "<b>Customer Email Address : </b>" +
      customerEmail +
      "<br/><br/> <b>Message from Customer : </b><br/>" +
      message +
      "</b><br/>";
    Email.send({
      SecureToken: "ded037d2-b264-4752-9436-d8d27d86dbfe",
      To: "thegrandmalabar@gmail.com",
      From: "info@thegrandmalabar.com",
      Subject: emailSubject,
      Body: emailBody,
    }).then((message) =>
      alert("Message sent. Thanks for sharing your feedback!")
    );
  }
}

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

function loadProperties(location) {
  if (location === "waterloo") {
    // Call the function to generate HTML
    generateFoodMenu("popularMenuDiv", popularFoodMenu);
    generateFoodMenu("specialMenuDiv", specialFoodMenu);
    generateFoodMenu("lovelyMenuDiv", lovelyFoodMenu);
  } else if (location === "cambridge") {
    generateFoodMenu("specialMenuDiv", specialFoodMenuCambridge);
    generateFoodMenu("curryMenuDiv", curryMenuCambridge);
    generateFoodMenu("snacksMenuDiv", snacksCambridge);
  }
}
//Testimonial Change - Start
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const allNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

// Shuffle the array and pick the first 7 numbers
const randomNumbersArray = shuffleArray(allNumbers).slice(0, 7);

var testimonials = {
  1: {
    quote:
      "One of the best places to have authentic Kerala food. The flavours were mouth watering and yummy. 10/10 for the food",
    author: "Manan Sharma",
  },
  2: {
    quote:
      "Definitely a fine dining! If you are a person who is looking for an Authentic Indian Restaurant, The Grand Malabar is the perfect choice!...",
    author: "Tesni George",
  },
  3: {
    quote:
      "We stumbled upon The Grand Malabar located at a quiet place in waterloo in our search for authentic kerala flavours. We loved the food here. We tried chemmen prawn roast, coconut chicken soup, kalappam , allepey chicken curry and malabar chicken biryani. Everything tasted so good. I can’t wait to go back again.",
    author: "Anindita Roy",
  },
  4: {
    quote:
      "It was a great experience in The Grand Malabar Indian Cuisine restaurant. Located in a quiet place in Waterloo, this evening restaurant serves...",
    author: "Anil Alias Paul",
  },
  5: {
    quote:
      "All the food items in the menu are delicious and authentic. Value for money. Loved it",
    author: "Nupoor Singh",
  },
  6: {
    quote:
      "New favourite Indian place in KW! Very fresh tasting ingredients and unique dishes. Delicious!",
    author: "Kevin Martin",
  },
  7: {
    quote:
      "I recently dined at The Grand Malabar, and it was an absolute delight. The staff was extremely friendly and attentive, and the ambiance was cozy...",
    author: "Bhavaani Amjith",
  },
  8: {
    quote:
      "Amazing food. I have lived in Dubai all my life and moved to Canada last year. The food here took me back there. Great food and even better portion sizes for affordable prices. Very polite and quick staff. Definitely going back there to try more of their menu.",
    author: "Swetha S Babu",
  },
  9: {
    quote:
      "Tasty food, amazing service. If you want to try authentic Kerala cuisine, this is a place you should visit. We tried Kerala fish curry with parotta and it was a heavenly combination. We ordered kadhai paneer as a veg option. The quantity is generous and enough for 2-3 people. They also serve mutton biryani on weekends. We also ordered that, mutton was not properly cooked, when informed to them, they handled it professionally. But all in all, 5 stars for the food and service. On weekends, it’s very crowded, so make sure to call or go 20-25 minutes before.",
    author: "Kirti Bhamare",
  },
  10: {
    quote:
      "Awesome dine in experience! The food was good. The chilli chicken was having high taste of soy sauce and it had the odour as well. When asked about it the staffs were really polite and helped to change it, which is really appreciated. But somehow the taste was the same. Not that recommended.Happy with the rest of the food we ordered.The porotta and sulaimani were awesome! Liked the ghee rice which had an authentic kerala flavour. This was our first time in this restaurant and will definitely come again!",
    author: "Varsha Susan Johns",
  },
  11: {
    quote:
      "The fish cutlets, fish nirvana, beef roast and butter paneer are all good options. Definitely a good place to visit for your South Indian cravings. They make sure to take allergens serious, just make sure you mention if you have any.",
    author: "S Valentine",
  },
  12: {
    quote:
      "Very good quality & tasty food. Service was excellent. Had Shrimp Roast & Ghee Rice, was quite large portions for two people. Love their items - Malabari Chicken Biriyani, Chicken Varutharacha Curry and Poricha Chicken as well, which we usually Doordash.",
    author: "Sandeep Dinesh",
  },
  13: {
    quote:
      "We tried this Malabar cuisine, it was a really good experience. We had the Puthiyapila Choru (their specialty), it was indeed a feast. Also had their Alleppey Chicken Curry and Beef Ularthiyathu with Parottas. It was a spice festival all together and really delicious. We will be back soon.",
    author: "Aqueel Rahman",
  },
  14: {
    quote:
      "Awesome malayali food!!!!  Tried Ghee rice, porotta and Chilli chicken and some other kerala dishes that were available. All the dishes were tasty and fresh. Got biriyani and curry as takeout also since we wanted more. Will go back there again. Loved it!!",
    author: "Prashob S",
  },
  15: {
    quote:
      "I had a great time eating delicious food from your restaurant. Your food was very yummy, especially the biryani. Last but not least your hospitality and presentation are fabulous. I wish you all the best for your service and work.",
    author: "Jinu Johny",
  },
  16: {
    quote:
      "Definitely a fine dining! If you are a person who is looking for an Authentic Indian Restaurant, The Grand Malabar is the perfect choice! This place offers exceptional food, friendly service and a great ambience to spend quality time with family and friends. We had a variety of items: Mutton Biriyani, Fish Cutlet, Fish Nirvana, Chilli Chicken, Kerala Porotta, Alleppey Chicken curry. Very delicious and well prepared, you can chose among many menu options. Extremely happy with the service. Highly recommend this place!",
    author: "Tesni George",
  },
  17: {
    quote:
      "Amazing food. After a very long time found really tasty kerala parotta and naadan beef curry in the area. Malabar Dum Biryani was great too.",
    author: "Sobhana K R",
  },
  18: {
    quote:
      "Indian culinary paradise! The menu here is a treasure trove of delicious options. The chef's skill in balancing spices is commendable. The warm ambiance and attentive service create the perfect dining atmosphere. Loved every bite!",
    author: "Ajlin Hyder",
  },
  19: {
    quote:
      "An unforgettable dining experience at Grand Malabar Indian Cuisine. The staff's friendliness and the inviting ambiance create the perfect setting. The beef ularthiyathu and Malabar chicken are culinary delights",
    author: "GZ",
  },
  20: {
    quote:
      "I ordered Puthiyappla choru(the signature dish) out of my friend’s recommendation and was Great! Enough for three people and have three different accompaniments. Everything was delicious, Liked the chicken curry the most. Highly recommended for any occasions and get together. Won’t regret!",
    author: "Joel Jaison",
  },
  21: {
    quote:
      "The service at this restaurant is top-notch. The staff's knowledge of the menu and wine pairings was impressive. The warm and welcoming ambiance made our evening even more enjoyable. The food exceeded our expectations",
    author: "Dhanupriya KM",
  },
  22: {
    quote:
      "If you are looking for authentic kerala cuisine this a good place to give it a try. They have managed to make all recipes in its original taste and form. Biriyani tastes yum and we can actually call it a BIRIYANI considering other restaurants just mixing rice with some curry and serving as biriyani. The prices are so reasonable for the vicinity. The quantity of the biriyani is good. Must try restaurant if visiting Waterloo kitchener. The staffs are so friendly too.",
    author: "Akash Joseph",
  },
  23: {
    quote:
      "Although I was sad to see one of my favourite Sushi places close in the region (This used to be the home of Tomu sushi) , I have now been to the Grand Malabar twice and the food has been excellent both times. I recommend the fish Nirvana and the biryani. Great service and staff are kind.",
    author: "Melissa Nicole",
  },
  24: {
    quote:
      "We live in London and heard about this restaurant from our friend and thought about giving it a try. The ambiance gave me an  experience similar to  restaurants in my hometown. We tried puthiyalpila chor which was amazing and no words to describe. I'll suggest anyone to try that without any thought. Nevertheless, their service was really good.",
    author: "Rethwick Ramesh",
  },
  25: {
    quote:
      "A culinary masterpiece! The authenticity of the food transported me back to Kerala. The chef's expertise truly shines through in every dish. The staff was incredibly welcoming and attentive.",
    author: "Safanaijas",
  },
  26: {
    quote:
      "Excellent food, great service and a pleasant atmosphere. Will be back here again",
    author: "Pushkar Sane",
  },
  27: {
    quote:
      "I had a Malabar chicken Biryani today. The aroma, taste and authenticity took me back to my home land. Grand malabar is the best dining spot for South Indian and the best restaurant in Waterloo Region.",
    author: "Arjun Pradeep",
  },
  28: {
    quote:
      "If you are a Malayali in Canada, this place is a must try. Their fish nirvana OMG is the best. Their kerala porotta and appam is just amazing. Their chicken biriyani and puthiyappila choru were delicious. I wish I could eat from there every day. Even if they were very busy, their taste and quality of food were just so good. The ambiance is great with private booths for family and group of friends.",
    author: "Anjana Grace Prince",
  },
  29: {
    quote:
      "A taste of India in Canada! This restaurant captures the essence of Indian flavors. The only drawback was the noise level, but the food more than made up for it. Highly recommended for a culinary journey through India.",
    author: "Diya D. A",
  },
  30: {
    quote:
      "Great experience overall! The dishes were tasty and beautifully presented. While the service was good, it could be a tad quicker during busy hours. Nevertheless, the authentic flavors made up for it.",
    author: "ADIL ABDULLA",
  },
  31: {
    quote:
      "One of the best Authentic Kerala food outlets in KWC region. Highly recommend their chicken and ghee rice combo which takes us back to Kerala.",
    author: "Nagaraj R",
  },
  32: {
    quote:
      "Good Kerala Food in KW region. Had Malabar Dum Biriyani . It was excellent. Porotta is as the best one which we get back home . Really enjoyed the dining experience. This is a good addition to great food joints in KW.",
    author: "Abhilash",
  },
  33: {
    quote:
      "One of the best places in Kitchener Waterloo region that serves authentic malayalee food. I really enjoyed the food and i will be back with more people to try new dishes. Nice atmosphere, good service, nice parking space and overall its one of the best places to dine in and take out.",
    author: "Akhil Krishnan",
  },
  34: {
    quote:
      "The The Grand Malabar is a great place to try authentic Indian cuisine. The food is cooked with fresh ingredients, and the flavors are truly unique. I would highly recommend it to anyone looking for a new dining experience. Yummy come try !!!",
    author: "Meenu S",
  },
  35: {
    quote:
      "First visit today and was blown away by the authenticity of the flavour, felt like I was back in Kerala. Food is freshly made and hence takes a bit of time - which I prefer. The service is very good and calm, there’s no pressure to eat and get out. Will be my go to place for when I crave for naatile food, can’t wait to visit again.",
    author: "Nikhil Ks",
  },
  36: {
    quote:
      "A culinary voyage to India! This Indian restaurant in Canada delivers an authentic taste of the subcontinent. The dishes are rich and flavorful, and the friendly staff made our dining experience truly memorable. A must-visit for Indian cuisine enthusiasts! - Easat or West India is the BEst",
    author: "Binu S",
  },
  37: {
    quote:
      "Food was really good. The restaurent is mainly focused on Kerala cuisine. We tried Biriyani Combo and Neychoru combo. Combo quantity is great and it's good for two people. Service was great and staffs are really helpful. Monday is not working day. The price of items are between 15$-20$. Must try restaurent in Kitchener Waterloo Area",
    author: "Tibin Cleetus",
  },
  38: {
    quote:
      "A true culinary journey to Kerala right here in Canada! The restaurant nailed both taste and presentation. The menu offered a wide range of choices, and the staff's recommendations were spot-on. Loved the attention to detail and the cozy atmosphere. An absolute must-visit for anyone seeking authentic Kerala cuisine.",
    author: "Sauba",
  },
  39: {
    quote:
      "The food was very delicious and the biryani is one of the best Biryanis , I ever tasted after silver spoon. I hope these guys open more locations across kitchener , Cambridge and Mississauga. Additionally , I really hope the start adding regular veggie and meat dosas.",
    author: "Harris Q",
  },
  40: {
    quote:
      "A dining experience like no other. The staff's enthusiasm and knowledge added to the charm of the rustic ambiance. The food was a culinary journey, leaving our taste buds dancing.",
    author: "Anandan B S",
  },
  41: {
    quote:
      "Indian culinary paradise! From the moment you step in, the aroma of spices promises an unforgettable dining experience. The quality and authenticity of the food are unmatched. The attentive service adds to the overall charm. Highly recommended!",
    author: "Sheeba Smrithi",
  },
  42: {
    quote:
      "An unforgettable Kerala feast at Grand Malabar Indian Cuisine. The staff's expertise and the inviting ambiance make it a standout dining experience. The beef ularthiyathu and Alleppey chicken curry are culinary treasures",
    author: "Jayakrishnan Jayan",
  },
  43: {
    quote:
      "Exceptional dining experience! The flavors at The Grand Malabar are a true celebration of Indian cuisine. I keep coming back for their delicious biryani.",
    author: "Sarath S",
  },
  44: {
    quote:
      "The Indian curries at The Grand Malabar is another one of my favorites. It's so tender and flavorful, and it has the perfect amount of heat. I would definitely recommend it to anyone who loves spicy food.",
    author: "Steffy Cherian",
  },
  45: {
    quote:
      "All the food items in the menu is delicious and authentic. Value for money. Loved it.",
    author: "Nupoor Singh",
  },
  46: {
    quote:
      "Much needed restaurant to cater Keralites in and around KW area otherwise needed to go all the way to Cambridge just for take out. Tried a couple of rice items and breads. All upto mark! Hope they maintain the quality and perhaps add more options with time !",
    author: "Manila O.V",
  },
  47: {
    quote:
      "Aromatic and mouthwatering! The Indian cuisine at this restaurant is top-notch. From the appetizers to the desserts, each dish was a delight. The staff's recommendations were spot-on, making it a memorable dining experience",
    author: "Sreelekshmi Jayan",
  },
  48: {
    quote:
      "This a great place to go for a casual or special occasion meal. The food is always delicious, and the service is excellent. I would highly recommend it to anyone looking for a great Indian meal. 5 star reviews :))",
    author: "Beema S",
  },
  49: {
    quote:
      "This restaurant knows how to treat its guests. The staff's attention to detail and the elegant ambiance made us feel special. The food was a revelation, with each dish bursting with flavor",
    author: "Musthafa Haji",
  },
  50: {
    quote:
      "We loved the food there. Really liked how we got sat down in 5 mins. The food is top notch but the prices are a bit high. But we were not disappointed. If the food is good, always ready to spend money. We drove all the way from london to kitchener to experience the food and glad that we were not disappointed.",
    author: "SHANI KURIAKOSE",
  },
};

function generateTestimonialDetails() {
  const testimonialContainer = document.createElement("div");
  testimonialContainer.className = "owl-carousel testimonial-carousel";

  for (var i = 0; i <= 6; i++) {
    const randomNumber = randomNumbersArray[i];
    const testimonial = testimonials[randomNumber];

    if (testimonial) {
      const testimonialItem = document.createElement("div");
      testimonialItem.className =
        "testimonial-item bg-transparent border rounded p-4";

      const quoteIcon = document.createElement("i");
      quoteIcon.className = "fa fa-quote-left fa-2x text-primary mb-3";

      const quoteParagraph = document.createElement("p");
      quoteParagraph.className = "paragraph-text";
      quoteParagraph.textContent = testimonial.quote;

      const authorContainer = document.createElement("div");
      authorContainer.className = "d-flex align-items-center";

      const authorHeading = document.createElement("h5");
      authorHeading.className = "mb-1";
      authorHeading.textContent = testimonial.author;

      // Appending elements to the testimonial item
      authorContainer.appendChild(authorHeading);
      testimonialItem.appendChild(quoteIcon);
      testimonialItem.appendChild(quoteParagraph);
      testimonialItem.appendChild(authorContainer);

      // Appending the testimonial item to the container
      testimonialContainer.appendChild(testimonialItem);
    }
  }

  document.getElementById("testimonialDivContainer").innerHTML =
    testimonialContainer.outerHTML;
}

generateTestimonialDetails();

$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 24,
  dots: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
//Testimonial Change - End

function showComingSoonPopUp() {
  const comingSoonDiv = document.createElement("div");

  // Set the text content
  comingSoonDiv.textContent = "Coming Soon";

  // Apply required CSS styles
  comingSoonDiv.style.backgroundColor = "#333";
  comingSoonDiv.style.color = "#fff";
  comingSoonDiv.style.padding = "20px";
  comingSoonDiv.style.borderRadius = "8px";
  comingSoonDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

  // Append the div to the body
  document.body.appendChild(comingSoonDiv);
}

//Array of image URLs
const imageUrls = [
  "img/menu/Alleppey_Chicken_Curry.jpeg",
  "img/menu/Chemmeen_Shrimp_Fry.jpeg",
  "img/menu/Beef_Ularthiyathu.jpeg",
  "img/menu/Kadai_Chicken.jpeg",
  "img/menu/Fish_Cutlets_2pc.jpeg",
];

// Shuffle the array of image URLs
shuffleArray(imageUrls);

// Create and append image elements to the container
const container = document.getElementById("order-online-id");
imageUrls.forEach((imageUrl) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("second-background-image");
  container.appendChild(img);
});

/* Slide show - Start */
const slideshowContainer = document.getElementById("slideshowContainer");
const slides = document.querySelectorAll(".mySlides img");

function transitionToNextImage() {
  const currentIndex = Array.from(slides).findIndex((img) =>
    img.classList.contains("header-zoomed")
  );

  slides[currentIndex].classList.remove("header-zoomed");
  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add("header-zoomed");

  // Ensure the next image is visible by resetting the transform
  slideshowContainer.style.transform = `translateX(-${nextIndex * 100}%)`;
}

function startSlideshow() {
  slides[0].classList.add("header-zoomed");

  setInterval(() => {
    transitionToNextImage();
  }, 3000);
}

startSlideshow();
/* Slide show - End */

var changeNavBarBg = true;
function changeIconBGColor() {
  var navBarId = document.getElementById("navBarId");
  if (changeNavBarBg) {
    navBarId.classList.add("fb-bar-expand-background");
    changeNavBarBg = false;
  } else {
    navBarId.classList.remove("fb-bar-expand-background");
    changeNavBarBg = true;
  }
}

function openPopup() {
  document.getElementById("deliveryPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("deliveryPopup").style.display = "none";
}

function openOnlineDelivery(partner, location) {
  if (partner === "uber") {
    if (location === "waterloo") {
      window.open(
        "https://www.ubereats.com/ca/store/the-grand-malabar-indian-cuisine/KkngsvkSWTOLQuBi0o8LCA?diningMode=DELIVERY",
        "_blank"
      );
    } else if (location === "cambridge") {
      window.open(
        "https://www.ubereats.com/ca/store/the-grand-malabar-express/MJXBAaJSXH-xt_QBYfeRuw",
        "_blank"
      );
    }
  } else if (partner === "dash") {
    if (location === "waterloo") {
      window.open(
        "https://www.doordash.com/store/the-grand-malabar-indian-cuisine-waterloo-24701025/",
        "_blank"
      );
    } else if (location === "cambridge") {
      window.open(
        "https://www.doordash.com/store/the-grand-malabar-indian-cuisine-cambridge-33373671/58721346/",
        "_blank"
      );
    }
  } else if (partner === "skip") {
    window.open(
      "https://www.skipthedishes.com/the-grand-malabar-indian-cuisine",
      "_blank"
    );
  }
}