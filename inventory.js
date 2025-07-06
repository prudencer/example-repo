//shoes object constructor
function Shoes(name, productCode, quality, price) {
    this.name = name;
    this.productCode = productCode;
    this.quality = quality;
    this.price = price;
}

//Create instances of Shoes
let shoe1 = new Shoes("Adidas Ultraboost", "AD5046",18,1200.00);
let shoe2 = new Shoes("All Star", "AL4587", 20, 950.00);
let shoe3 = new Shoes("Nike Air Max", "NAM498", 25, 1800.00);
let shoe4 = new Shoes("Puma Suede", "PU7690", 30, 1000.00);
let shoe5 = new Shoes("CAT Boots", "CAT865", 38, 3500.00);

let shoesInventory = [shoe1, shoe2, shoe3, shoe4, shoe5];

function searchShoesByName(searchItem) {
    return shoesInventory.find((shoe) => shoe.name.toLowerCase() === searchItem.toLowerCase() ) || null;
}

function searchShoesByCode(searchItem) {
    return shoesInventory.find((shoe) => shoe.productCode.toLowerCase() === searchItem.toLowerCase()) || null;
}

function searchShoes(searchItem) {
    return searchShoesByName(searchItem) || searchShoesByCode(searchItem) || null;
}

function findLowestValueShoes() {
    return shoesInventory.reduce((lowest, shoe) => shoe.price < lowest.price ? shoe : lowest);
}

function findHighestValueShoes() {
    return shoesInventory.reduce((highest, shoe) => shoe.price > highest.price ? shoe : highest);
}

function sortShoesByValue() {
    return shoesInventory.sort((shoeA, shoeB) => shoeA.price - shoeB.price);
}

function editAllShoes(newShoesData) {
    shoesInventory.forEach((shoe, index) => {
        shoe.name = newShoesData[index].name;
        shoe.productCode = newShoesData[index].productCode;
        shoe.quality = newShoesData[index].quality;
        shoe.price = newShoesData[index].price;
    });
    return shoesInventory;
}

//To format display on console
function formatShoe(shoe) {
  return (
    "NAME".padEnd(18) + "CODE".padEnd(12) + "QUALITY".padEnd(12) + "PRICE" + "\n" +
    shoe.name.padEnd(18) + shoe.productCode.padEnd(12) + String(shoe.quality).padEnd(12) + String(shoe.price) + "\n"
  );
}


//----------------------------------------------------------------------------------------------------------------//
//  Execution and tests of functions  -  Ouput in Console                                                         //
//----------------------------------------------------------------------------------------------------------------//

//Inventory of shoes
setTimeout(() => {
    console.log("\nAvailable shoes:");
    console.table(shoesInventory);
    console.log("\n");
    console.log("--------------------------------------------------------------------------------------------");
}, 1000);

//show lowest value
setTimeout(() => {
    const lowestShoeValue = findLowestValueShoes();
    console.log("Lowest Value Shoe:\n"+formatShoe(lowestShoeValue));
    console.log("--------------------------------------------------------------------------------------------");    
}, 2000);

//show highest value
setTimeout(() => {
    const highestValueShoe = findHighestValueShoes();
    console.log("Highest Value Shoe:\n"+formatShoe(highestValueShoe));
    console.log("--------------------------------------------------------------------------------------------");
}, 4000);

//show sorted shoe inventory
setTimeout(() => {
    console.log("Sorted Inventory List: ");
    console.table(sortShoesByValue());
    console.log("\n");
    console.log("--------------------------------------------------------------------------------------------");
}, 6000);

//search shoe by name
setTimeout(() => {
    console.log("Search shoe[all star]: \n")
    console.log("Searching.....");
}, 9000);
setTimeout(() => {
    let shoe = searchShoes("all star");
    shoe ? console.log(formatShoe(shoe)) : console.log(`Shoe not found.\n`);
    console.log("--------------------------------------------------------------------------------------------");
}, 11000);

//search shoe by code
setTimeout(() => {
    console.log("Search shoe[NAM498]: \n")
    console.log("Searching.....");
}, 13000);
setTimeout(() => {
    let shoe = searchShoes("NAM498");
    shoe ? console.log(formatShoe(shoe)) : console.log(`Shoe not found.\n`);
    console.log("--------------------------------------------------------------------------------------------");
}, 15000);

//search shoe - not found
setTimeout(() => {
    console.log("Search shoe[Gucci]: \n")
    console.log("Searching.....");
}, 17000);
setTimeout(() => {
    let shoe = searchShoes("CAT Gucci");
    shoe ? console.log(formatShoe(shoe)) : console.log(`Shoe not found.\n`);
    console.log("--------------------------------------------------------------------------------------------");
}, 19000);

setTimeout(() => {
    console.log("Update entire shoe inventory with following data: ");
    const newData = [
        { name: "Nike", productCode: "NA123", quality: 25, price: 2200.00 },
        { name: "Adidas Run", productCode: "AR456", quality: 30, price: 1500.00 },
        { name: "Puma Speed", productCode: "PS789", quality: 20, price: 1000.00 },
        { name: "Reebok Classic", productCode: "RC101", quality: 15, price: 2000.00 },
        { name: "Converse", productCode: "CB202", quality: 10, price: 950.00 }
    ];
    console.log("NAME".padEnd(18) + "CODE".padEnd(12) + "QUALITY".padEnd(12) + "PRICE");
    editAllShoes(newData);
    newData.forEach((shoe) => {
        console.log(
            shoe.name.padEnd(18) +
            shoe.productCode.padEnd(12) +
            String(shoe.quality).padEnd(12) +
            String(shoe.price.toFixed(2))
        );
    });
    console.log("\n");
}, 21000);

setTimeout(() => {
    console.log("Updating Inventory list....\n");
}, 23000);


setTimeout(() => {
    console.log("Updated Inventory list:");
    console.table(shoesInventory);
    console.log("\n--------------------------------------------------------------------------------------------");
}, 25000);

setTimeout(() => {
    console.log("Search shoe[all star]: \n")
    console.log("Searching.....");
}, 27000);
setTimeout(() => {
    let shoe = searchShoes("all star");
    shoe ? console.log(formatShoe(shoe)) : console.log(`Shoe not found.\n`);
    console.log("--------------------------------------------------------------------------------------------");
}, 29000);

//-------------------------------------------------------Function Test End====-------------------------------------------------//

setTimeout(() => {
    console.log("\n\n\n😅🌞This was actually a fun task👍, I probably wasted 5 tasks' time on it🙈😂🏃‍➡️ I enjoyed it😎👌 \n\n\n");
}, 35000);
