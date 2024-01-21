const message = `Welcome to Odinaka's Shoe Planet!`;
console.log(message);

// Define an array to store the products
let footWear = [
  {
    name: "Sandals",
    price: 4000,
    count: 10,
  },

  {
    name: "Chelsea boots",
    price: 9000,
    count: 12,
  },

  {
    name: "Heels",
    price: 8000,
    count: 19,
  },
];

// Function to display all products in the inventory
function listFootwear() {
  footWear.forEach((footwear, index) => {
    console.log(`${index + 1}. ${footwear.name} ------- ${footwear.price}`);
  });
}

// Function to simulate a purchase
function calPrice() {
  const totalPrice = footWear.map((item) => ({
    name: item.name,
    totalPrice: item.price * item.count,
  }));
  console.log(totalPrice);
}

function buyProduct(index) {
  let footwear = footWear[index];

  if (footwear) {
    console.log(
      `you successfully purchased ${footwear.name} at the price of ${footwear.price}`
    );
  } else {
    console.log("invalid product");
  }
}

listFootwear();
calPrice();
buyProduct(0);
