// ♡ adds the cute fairy dust ♡
new cursoreffects.fairyDustCursor();

let usdToday;
let eurToday;
let btcToday;
fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then((response) => response.json())
    .then((data) => {
        usdToday = data.USDBRL.ask;
        eurToday = data.EURBRL.ask;
        btcToday = data.BTCBRL.high;

        console.log(`o valor de usdToday: ${usdToday}`);
        console.log(`o valor de eurToday: ${eurToday}`);
        console.log(`o valor de btcToday: ${btcToday}`);
        usdToday = parseFloat(usdToday);
        eurToday = parseFloat(eurToday);
        btcToday = parseFloat(btcToday);

        // adiciona o valor atual no placeholder
        realMoney.placeholder = `${usdToday.toFixed(2)}`;
        real__money.placeholder = `${eurToday.toFixed(2)}`;
        real___money.placeholder = `${btcToday.toFixed(5)}`;
    });

// dolar ~~> real
let dolarMoney = document.querySelector(".enter-moeda");
let realMoney = document.querySelector(".enter-moeda2");

async function showReal() {
    let dolar = dolarMoney.value;

    if (dolar === 0) {
        realMoney.value = `0`;
    } else if (dolar == "") {
        realMoney.value = ``;
    } else if (isNaN(dolar)) {
        realMoney.value = `0`;
    } else {
        let real = dolar * usdToday;
        let realCastrado = real.toFixed(2);

        realMoney.value = `${realCastrado}`;
        console.log(`${dolar} usd---> ${realCastrado} r$`);
    }
    return usdToday;
}
dolarMoney.addEventListener("input", showReal);

function showDolar() {
    let real = realMoney.value;

    if (real === 0) {
        dolarMoney.value = `0`;
    } else if (real == "") {
        dolarMoney.value = ``;
    } else if (isNaN(real)) {
        dolarMoney.value = `0`;
        console.log(real);
    } else {
        let dolar = real / usdToday;
        let dolarCastrado = dolar.toFixed(2);

        dolarMoney.value = `${dolarCastrado}`;
        console.log(`${real} r$ ---> ${dolarCastrado} usd`);
    }
}
realMoney.addEventListener("input", showDolar);

////////////////////////////////////////////////////////////////////////////////

// euro ~> real
let euro__money = document.querySelector(".enter-moeda3");
let real__money = document.querySelector(".enter-moeda4");

function show__real() {
    let euro = euro__money.value;

    if (euro === 0) {
        real__money.value = `0`;
    } else if (euro == "") {
        real__money.value = ``;
    } else if (isNaN(euro)) {
        real__money.value = `0`;
    } else {
        let real = euro * eurToday;
        let realCastrado = real.toFixed(2);

        real__money.value = `${realCastrado}`;
        console.log(`${euro} eur ---> ${real} r$`);
    }
}
euro__money.addEventListener("input", show__real);

function show__euro() {
    let real = real__money.value;

    if (real === 0) {
        euro__money.value = `0`;
    } else if (real == "") {
        euro__money.value = ``;
    } else if (isNaN(real)) {
        euro__money.value = `0`;
        console.log(real);
    } else {
        let euro = real / eurToday;
        let euroCastrado = euro.toFixed(2);

        euro__money.value = `${euroCastrado}`;
        console.log(`${real} r$ ---> ${euro} eur`);
        // console.log(real);
    }
}
real__money.addEventListener("input", show__euro);

////////////////////////////////////////////////////////////////////////////////

// bitcoin ~> real
let bitcoin__money = document.querySelector(".enter-moeda5");
let real___money = document.querySelector(".enter-moeda6");

function show___real() {
    let bitcoin = bitcoin__money.value;

    if (bitcoin === 0) {
        real___money.value = `0`;
    } else if (bitcoin == "") {
        real___money.value = `${btcToday}`;
    } else if (isNaN(bitcoin)) {
        real___money.value = `0`;
    } else {
        let real = bitcoin * btcToday;
        let realCastrado = real.toFixed(4);

        real___money.value = `${realCastrado}`;
        console.log(`${bitcoin} btc ---> ${real} r$`);
    }
}
bitcoin__money.addEventListener("input", show___real);

function show__bitcoin() {
    let real = real__money.value;

    if (real === 0) {
        bitcoin__money.value = `0`;
    } else if (real == "") {
        bitcoin__money.value = ``;
    } else if (isNaN(real)) {
        bitcoin__money.value = `0`;
        console.log(real);
    } else {
        let bitcoin = real / btcToday;
        let bitcoinCastrado = bitcoin.toFixed(4);

        bitcoin__money.value = `${bitcoinCastrado}`;
        console.log(`${real} r$  ---> ${bitcoin} btc`);
        // console.log(real);
    }
}
real___money.addEventListener("input", show__bitcoin);

////////////////////////////////////////////////////////////////////////////////

// medidas centimetro to inches
// para um resultado aproximado, divida o valor de comprimento por 2,667

let cmInput = document.querySelector(".enter-cm");
let inInput = document.querySelector(".enter-in");

cmInput.addEventListener("input", showCM);

function showCM() {
    let cm = cmInput.value;
    // console.log(cm);

    if (cm === 0) {
        inInput.value = `0`;
    } else if (cm == "") {
        inInput.value = ``;
    } else if (isNaN(cm)) {
        inInput.value = `0`;
    } else {
        let inches = cm / 2.54;
        let inchesCastrado = inches.toFixed(2);

        inInput.value = `${inchesCastrado}`;
        // document.getElementById('add').value = sum;
        console.log(`${cm} cm ---> ${inches.toFixed(2)} inches`);
        // console.log(real);
    }
}

inInput.addEventListener("input", showIN);

function showIN() {
    let inc = inInput.value;
    // console.log(inc);

    if (inc === 0) {
        cmInput.value = `0`;
    } else if (inc == "") {
        cmInput.value = ``;
    } else if (isNaN(inc)) {
        cmInput.value = `0`;
    } else {
        let centimers = inc * 2.54;
        let centimersCastrado = centimers.toFixed(2);

        cmInput.value = `${centimersCastrado}`;
        // document.getElementById('add').value = sum;
        console.log(`${inc} inches ---> ${centimers.toFixed(2)} centimers`);
        // console.log(real);
    }
}

////////////////////////////////////////////////////////////////////////////////

// kg to lbs
// para um resultado aproximado, divida o valor de massa por 0.45359237

let kgInput = document.querySelector(".enter-kg");
let lbsInput = document.querySelector(".enter-lbs");

kgInput.addEventListener("input", showKG);

function showKG() {
    let kg = kgInput.value;
    // console.log(kg);

    if (kg === 0) {
        lbsInput.value = `0`;
    } else if (kg == "") {
        lbsInput.value = ``;
    } else if (isNaN(kg)) {
        lbsInput.value = `0`;
    } else {
        let lbs = kg / 0.45359237;
        let lbsCastrado = lbs.toFixed(2);

        lbsInput.value = `${lbsCastrado}`;
        // document.getElementById('add').value = sum;
        console.log(`${kg} kg ---> ${lbs.toFixed(2)} lbs`);
        // console.log(real);
    }
}

lbsInput.addEventListener("input", showLBS);

function showLBS() {
    let lbs = lbsInput.value;
    // console.log(lbs);

    if (lbs === 0) {
        kgInput.value = `0`;
    } else if (lbs == "") {
        kgInput.value = ``;
    } else if (isNaN(lbs)) {
        kgInput.value = `0`;
    } else {
        let kg = lbs * 0.45359237;
        let kgCastrado = kg.toFixed(2);

        kgInput.value = `${kgCastrado}`;
        // document.getElementById('add').value = sum;
        console.log(`${lbs} lbs ---> ${kg.toFixed(2)} kg`);
        // console.log(real);
    }
}

////////////////////////////////////////////////////////////////////////////////
/*
    dolarMoney.innerHTML = `${ dolarCastrado }`;

innerHTML sets the text (including html elements) inside an element. Normally we use it for elements like div, span etc to insert other html elements inside it.

    dolarMoney.value = `${ dolarCastrado }`;

For your case you want to set the value of an input element. So you should use the value attribute.
*/