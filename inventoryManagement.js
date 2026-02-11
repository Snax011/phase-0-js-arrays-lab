// Write your code here

// Declare the products array with the required product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product in the array
function logFirstProduct() {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("No products available.");
  }
}

// Function to add a new product to the array
function addProduct(productName) {
  if (typeof productName === 'string' && productName.trim() !== '') {
    products.push(productName.trim());
  } else {
    console.log("Invalid product name.");
  }
}

// Function to update the name of a product at a given position
function updateProductName(position, newName) {
  if (
    typeof position === 'number' &&
    position >= 0 &&
    position < products.length &&
    typeof newName === 'string' &&
    newName.trim() !== ''
  ) {
    products[position] = newName.trim();
  } else {
    console.log("Invalid position or new name.");
  }
}

// Function to remove the last product from the array
function removeLastProduct() {
  if (products.length > 0) {
    products.pop();
  } else {
    console.log("No products to remove.");
  }
}

// Export the functions and products array
module.exports = {
  updateProductName,
  removeLastProduct,
  logFirstProduct,
  addProduct,
  products
};

