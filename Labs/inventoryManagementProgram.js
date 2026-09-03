let inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function addProduct(product) {
  let isAvailable = false;

  product.name = product.name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === product.name) {
      isAvailable = true;
      inventory[i].quantity += product.quantity;

      console.log(`${product.name} quantity updated`);
      break;
    }
  }

  if (!isAvailable) {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

function removeProduct(prodName, qty) {
  let isAvailable = false;

  prodName = prodName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (prodName === inventory[i].name) {
      isAvailable = true;

      if (inventory[i].quantity < qty) {
        console.log(`Not enough ${prodName} available, remaining pieces: ${inventory[i].quantity}`);
        break;
      }

      inventory[i].quantity -= qty;

      console.log(
        `Remaining ${prodName} pieces: ${inventory[i].quantity}`
      );

      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      }

      break;
    }
  }

  if (!isAvailable) {
    console.log(`${prodName} not found`);
  }
}
