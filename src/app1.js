import $ from "jquery"
import "../src/app1.css"

const html = `
        <section id="app1">
            <div class="output">
                <span id="number"></span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="multiply2">×2</button>
                <button id="divide2">÷2</button>
            </div>
        </section>
`
const $element = $(html).appendTo($("body>#apps"))

const $button1 = $("#add1")
const $button2 = $("#minus1")
const $button3 = $("#multiply2")
const $button4 = $("#divide2")
const $number = $("#number")

$number.text(localStorage.getItem("currentNumber")||100)

$button1.on("click", ()=>{
    let currentNumber = parseInt($number.text())
    currentNumber += 1;
    localStorage.setItem("currentNumber", currentNumber)
    $number.text(currentNumber)
})

$button2.on("click", ()=>{
    let currentNumber = parseInt($number.text())
    currentNumber -= 1;
    localStorage.setItem("currentNumber", currentNumber)
    $number.text(currentNumber)
})

$button3.on("click", ()=>{
    let currentNumber = parseInt($number.text())
    currentNumber *=2;
    localStorage.setItem("currentNumber", currentNumber)
    $number.text(currentNumber)
})

$button4.on("click", ()=>{
    let currentNumber = parseInt($number.text())
    currentNumber /= 2;
    localStorage.setItem("currentNumber", currentNumber)
    $number.text(currentNumber)
})