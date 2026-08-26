const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const shipment = [];

  for (let i = 0; i < rawData.length; i++) {
    const data = rawData[i].split("|");

    const sku = data[0];
    const name = data[1];
    const qty = Number(data[2]);
    const expires = data[3];
    const zone = data[4] || "general";

    let isDuplicate = false;

    for (let j = 0; j < shipment.length; j++) {
      if (shipment[j].sku === sku) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      shipment.push({
        sku: sku,
        name: name,
        qty: qty,
        expires: expires,
        zone: zone
      });
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  let actions = [];
  for (let i = 0; i < shipment.length; i++) {
    let isARestock = false;
    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j]["sku"] === shipment[i]["sku"]){
        isARestock = true;
        break;
      }
    }
    if (shipment[i]["qty"] <= 0) {
      actions.push({type: "discard", item: shipment[i]})
    } else if (isARestock) {
      actions.push({type: "restock", item: shipment[i]})
    } else if (!isARestock) {
      actions.push({type: "donate", item: shipment[i]})
    }
  } 
  return actions
}

function groupByZone(actions) {
  let grouped = {};

  for (let i = 0; i < actions.length; i++) {
    let zone = actions[i].item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(actions[i]);
  }

  return grouped;
}

function clonePantry(pantry) {
  return structuredClone(pantry)
}
const clonedPantry = clonePantry(pantry);
const shipment = parseShipment(rawData);
const actions = planRestock(clonedPantry, shipment);
console.log(groupByZone(actions))
