const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const num0 = document.getElementById("num0")
const numComa = document.getElementById("numComa")

const sumar = document.getElementById("sumar")
const restar = document.getElementById("restar")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")
const igual = document.getElementById("igual")

const input = document.getElementById("input")
const input2 = document.getElementById("input2")
const clear = document.getElementById("clear")



let variable = 0
let variable2 = 0
let sumarV = false
let restarV = false
let multiplicarV = false
let dividirV = false


function uno(){
   
    input.value += 1
    
}

function dos(){
   
    input.value += 2
}
function tres(){
   
    input.value += 3
}
function cuatro(){
   
    input.value += 4
}
function cinco(){
   
    input.value += 5
}
function seis(){
   
    input.value += 6
}
function siete(){
    
    input.value += 7
}
function ocho(){
    
    input.value += 8
}
function nueve(){
   
    input.value += 9
}

function cero(){
   
    input.value += 0
}
function coma(){
    
    input.value += "."
}

function vaciar(){
    
    input.value = ""
    input2.value = "0"
}


function suma(){
   
    if(input.value == ""){
        variable = input2.value
        sumarV = true;
        input2.value += "+"
        input.value = ""
    }else{
        sumarV = true;
        variable = input.value
        input2.value = input.value + "+"
        input.value = ""
    }
    
    
}
function resta(){
   
    if(input.value == ""){
        variable = input2.value
        restarV = true;
        input2.value += "-"
        input.value = ""
    }else{
        restarV = true;
        variable = input.value
        input2.value = input.value + "-"
        input.value = ""
    }
    
}
function multiplicacion(){
   
    if(input.value == ""){
        variable = input2.value
        multiplicarV = true;
        input2.value += "*"
        input.value = ""
    }else{
        multiplicarV = true;
        variable = input.value
        input2.value = input.value + "*"
        input.value = ""
    }
    
}
function division(){
   
    if(input.value == ""){
        variable = input2.value
        dividirV = true;
        input2.value += "/"
        input.value = ""
    }else{
        dividirV = true;
        variable = input.value
        input2.value = input.value + "/"
        input.value = ""
    }
    
}


function calcular(){
   
    variable2 = input.value
if(sumarV){
    input2.value = parseFloat(variable) + parseFloat(variable2)
}else if(restarV){
    input2.value = parseFloat(variable) - parseFloat(variable2)
}else if(multiplicarV){
    input2.value = parseFloat(variable) * parseFloat(variable2)
}else if(dividirV){
    input2.value = parseFloat(variable) / parseFloat(variable2)
}

input.value = ""
sumarV = false
restarV = false
multiplicarV = false
dividirV = false

}
