// code here, goodluck!!
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

// Function untuk mendapatkan angka yang valid
function getValidNumberInput(promptMessage) {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);
    const convertedNumber = Number(userInput);
    if (!isNaN(convertedNumber)) {
      return convertedNumber;
    }
    console.log("Input tidak valid. Harap masukkan angka yang valid.");
  }
}

// Function untuk mendapatkan operator yang valid (+, -, *, /, %, **)
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let operator;
  while (true) {
    operator = prompt(promptMessage);
    if (validOperators.includes(operator)) {
      return operator;
    }
    console.log(
      "Operator tidak valid. Silakan masukkan salah satu dari berikut ini: +, -, *, /, %, **"
    );
  }
}

// functions Mateamtika
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Kesalahan: Pembagian dengan nol!";
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// Loop kalkulator utama
while (true) {
  const num1 = getValidNumberInput("Masukkan nomor pertama: ");
  const operator = getValidOperatorInput(
    "Masukkan operator (+, -, *, /, %, **): "
  );
  const num2 = getValidNumberInput("Masukkan nomor kedua: ");

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      result = undefined;
  }

  // Tampilkan hasil
  console.log("Result:", result);

  // Analisis tipe data
  if (typeof result === "number") {
    if (result > 0) {
      console.log("Hasilnya positif.");
    } else if (result < 0) {
      console.log("Hasilnya negatif.");
    } else {
      console.log("Hasilnya nol.");
    }

    if (Number.isInteger(result)) {
      console.log("Angka tersebut merupakan bilangan bulat.");
    } else {
      console.log("Angka tersebut adalah angka floating-point.");
    }

    const evenOrOdd = result % 2 === 0 ? "Genap" : "Ganjil";
    console.log("Nomornya adalah:", evenOrOdd);

    if (result > 0 && result % 2 === 0) {
      console.log("Angkanya positif DAN genap.");
    }
    if (result < 0 || result === 0) {
      console.log("Angka tersebut negatif ATAU nol.");
    }
  } else if (typeof result === "string") {
    console.log("Error:", result);
  } else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }

  const continueCalc = prompt(
    "Apakah Anda ingin melakukan perhitungan lain?? (ya/tidak): "
  ).toLowerCase();
  if (continueCalc === "tidak") {
    console.log("Keluar dari kalkulator...");
    break;
  }
}
