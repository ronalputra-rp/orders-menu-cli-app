const prompt = require('prompt-sync')();

let ordersList = [];
let stop;
let stopDelete;
function mainMenu () {
    console.log("===== Daftar Pesanan Makanan =====");
    console.log("1. Menambahkan pesanan");
    console.log("2. Melihat semua pesanan");
    console.log("3. Menghapus pesanan");
    console.log("4. Melihat total harga pesanan yang sudah masuk");
    console.log("5. Selesai")
    const menu = prompt("Menu yang dipilih (masukkan angka dari menu untuk memilih) : ");
    const menuFinal = parseInt(menu);
    return menuFinal;
}
function addingOrders (choice1) {
    if (choice1 === 1){
    do {
        const food = prompt("Nama makanan : ");
        let priceFood = prompt("Harga makanan : ");
        priceFood = parseInt(priceFood);
        if (isNaN(priceFood)){
            console.log("Mohon maaf, anda harus masukkan angka dalam baris 'Harga' ini !!");
            break;
        }
        const drink = prompt("Nama minuman : ");
        let priceDrink = prompt("Harga : ");
        priceDrink = parseInt(priceDrink);
        if (isNaN(priceDrink)){
            console.log("Mohon maaf, anda harus masukkan angka dalam baris 'Harga' ini !!");
            break;
        }

        var dish = [
            {id:1,name:food,price:priceFood,type:"Makanan"},
            {id:2,name:drink,price:priceDrink,type:"Minuman"}
        ]

        for (const item of dish) {
            item.id = ordersList.length + 1;
            ordersList.push(item);
        }

        for (const p of ordersList ) {
            console.log(`${p.id}. ${p.name} --> ${p.price} (${p.type})`)
        }

        stop = prompt("Apakah anda ingin menginput lagi (y/n): ").toLowerCase();
        if (stop.toLowerCase() === "n") {
            break;
        }
    }
    while (stop.toLowerCase() === "y")
    }
}

function showingOrders (choice2) {
    if (choice2 === 2) {
        if (ordersList.length < 1) {
            console.log("Belum ada data menu yang ditambahkan");
            return;
        }
        for (const p of ordersList ) {
            console.log(`${p.id}. ${p.name} --> ${p.price} (${p.type})`);
    }
    }
}

function deleteOrders (choice3) {
    do {
        let found = false;
        if (choice3 === 3) {
        const menuName = prompt("Masukkan nama menu yang ingin dihapus : ");
        for (let i = 0; i < ordersList.length; i++){
        if (ordersList[i].name.toLowerCase() === menuName.toLowerCase()){
            ordersList.splice(i, 1);
            console.log(`Menu ${menuName} berhasil dihapus !!`);
            found = true;
            break;
        }
        }
        }
        if (found === false) {
            console.log("Menu tidak ditemukan");
        }
        for (let i = 0; i < ordersList.length; i++){
            ordersList[i].id = i + 1;
        }

        if (ordersList.length < 1){
            console.log('Belum ada data menu yang ditambahkan');
        }
        else {
            for (const p of ordersList ) {
            console.log(`${p.id}. ${p.name} --> ${p.price} (${p.type})`);
        }
        }

        stopDelete = prompt("Apakah anda ingin menghapus data kembali (y/n) : ").toLowerCase();
        if (stopDelete.toLowerCase() === "n") {
            break;
        }
    }
    while (stopDelete === "y")
}

function priceTotal (choice4) {
    let total = 0;
    if (choice4 === 4) {
        for (const p of ordersList) {
            total += p.price;
        }
        console.log(`Total harga pesanan : ${total}`)
    }
}

function finishOrders (choice5) {
    if (choice5 === 5) {
        console.log("Terimakasih!!");
    }
}

let menuFinal = 0;
do {
    menuFinal = mainMenu();
    switch (menuFinal) {
    case 1:
        addingOrders(menuFinal);
        break;
    case 2:
        showingOrders(menuFinal);
        break;
    case 3:
        deleteOrders(menuFinal);
        break;
    case 4:
        priceTotal(menuFinal);
        break;
    case 5:
        finishOrders(menuFinal);
        break;
    default:
        console.log("Pilihan menu tidak valid");
}
}
while (menuFinal !== 5)