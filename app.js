let billName = document.getElementById('billName');
let customerName = document.getElementById('customerName');
let unitsAmount = document.getElementById('unitsAmount');
let unitPrice = document.getElementById('unitPrice');

let today = new Date();

let months = today.getMonth();
let monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function generate() {
    let amountwithDate = unitsAmount.value * unitPrice.value
    let latefees = Math.round(amountwithDate/12);
    let amountwithnoDate = amountwithDate + latefees
    document.write('<br>')
    document.write('<div style="border-radius:50px; 250px; margin-left: 500px; margin-right: 500px; background: rgb(197,255,253); background: linear-gradient(138deg, rgba(197,255,253,1) 0%, rgba(255,255,255,1) 49%, rgba(95,255,250,1) 100%); box-shadow: 0px 0px 45px -30px rgba(0,0,0,0.75); backdrop-filter: blur(25px);">')
    document.write('<center>')
    document.write(`<h1>${billName.value} Bill</h1>`)
    document.write(`<hr>`)
    document.write(`<p>Customer Name: <b>${billName.value}</b></p>`)
    document.write(`<p>Month: <b>${monthsName[months]}</b></p>`)
    document.write(`<p>Numbers of Units: <b>${unitsAmount.value}</b></p>`)
    document.write(`<p>Charges per Unit: <b>${unitPrice.value}</b></p>`)
    document.write(`<hr>`)
    document.write(`<p>Bill Amount (Within Due Date): <b>${amountwithDate}</b></p>`)
    document.write(`<p>Late Charges: <b>${latefees}</b></p>`)
    document.write(`<p>Bill Amount (After Due Date): <b>${amountwithnoDate}</b></p>`)
    document.write(`<hr>`)
    document.write(`<br>`)
    document.write(`Made by Afaq`)
    document.write(`<br>`)
    document.write(`<br>`)
    document.write('</center>')
    document.write('</div>')
}
