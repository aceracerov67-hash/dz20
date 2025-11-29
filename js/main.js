

let cars = [
    {name: "BYD", yili: "2025", price: "11589$", familyasi: "Seal", xod: "0km", img: "../images/download.jpg"},
    {name: "BMW", yili: "2022", price: "35000$", familyasi: "M5", xod: "12000km", img: "../images/download.jpg"},
    {name: "Mercedes", yili: "2023", price: "42000$", familyasi: "E200", xod: "8000km", img: "../images/download.jpg"},
    {name: "Audi", yili: "2021", price: "28000$", familyasi: "A6", xod: "15000km", img: "../images/download.jpg"},
    {name: "Kia", yili: "2024", price: "21000$", familyasi: "K5", xod: "0km", img: "../images/download.jpg"},
    
    {name: "Hyundai", yili: "2023", price: "19500$", familyasi: "Sonata", xod: "5000km", img: "../images/download.jpg"},
    {name: "Chevrolet", yili: "2020", price: "11000$", familyasi: "Malibu", xod: "30000km", img: "../images/download.jpg"},
    {name: "Tesla", yili: "2024", price: "50000$", familyasi: "Model 3", xod: "0km", img: "../images/download.jpg"},
    {name: "Toyota", yili: "2021", price: "25000$", familyasi: "Camry", xod: "20000km", img: "../images/download.jpg"},
    {name: "Nissan", yili: "2022", price: "23000$", familyasi: "Altima", xod: "18000km", img: "../images/download.jpg"},
    
    {name: "BYD", yili: "2024", price: "13000$", familyasi: "Han", xod: "0km", img: "../images/download.jpg"},
    {name: "Honda", yili: "2021", price: "19000$", familyasi: "Accord", xod: "22000km", img: "../images/download.jpg"},
    {name: "Mazda", yili: "2023", price: "26000$", familyasi: "Mazda 6", xod: "9000km", img: "../images/download.jpg"},
    {name: "Volkswagen", yili: "2020", price: "17000$", familyasi: "Passat", xod: "31000km", img: "../images/download.jpg"},
    {name: "Lexus", yili: "2024", price: "33000$", familyasi: "ES350", xod: "0km", img: "../images/download.jpg"},
    
    {name: "Ford", yili: "2019", price: "15000$", familyasi: "Fusion", xod: "40000km", img: "../images/download.jpg"},
    {name: "Chevrolet", yili: "2023", price: "21000$", familyasi: "Cruze", xod: "6000km", img: "../images/download.jpg"},
    {name: "Skoda", yili: "2022", price: "18000$", familyasi: "Octavia", xod: "17000km", img: "../images/download.jpg"},
    {name: "Renault", yili: "2021", price: "13000$", familyasi: "Talisman", xod: "27000km", img: "../images/download.jpg"},
    {name: "Peugeot", yili: "2023", price: "22000$", familyasi: "508", xod: "9000km", img: "../images/download.jpg"},
];

function getCards() {
    let result = "";

    cars.forEach(car => {
        result += `
            <div class="card">
                <img src="${car.img}" alt="Car">
                <h3>${car.name}</h3>
                <p>Yili: ${car.yili}</p>
                <p>Narxi: ${car.price}</p>
                <p>Familasi: ${car.familyasi}</p>
                <p>Xod: ${car.xod}</p>
            </div>
        `;
    });

    document.getElementById("card").innerHTML = result;
}

getCards();
