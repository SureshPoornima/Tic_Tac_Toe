function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed!";
}

var array = create2dArray(3)
fillArray(array)


var table = document.querySelector(".gameboard")
var one = document.getElementsByTagName("th")[0]
var two = document.getElementsByTagName("th")[1]
var three = document.getElementsByTagName("th")[2]
var four = document.getElementsByTagName("th")[3]
var five = document.getElementsByTagName("th")[4]
var six = document.getElementsByTagName("th")[5]
var seven = document.getElementsByTagName("th")[6]
var eight = document.getElementsByTagName("th")[7]
var nine = document.getElementsByTagName("th")[8]

one.addEventListener("click",function(){fill(one,0,0)})
two.addEventListener("click",function(){fill(two,0,1)})
three.addEventListener("click",function(){fill(three,0,2)})
four.addEventListener("click",function(){fill(four,1,0)})
five.addEventListener("click",function(){fill(five,1,1)})
six.addEventListener("click",function(){fill(six,1,2)})
seven.addEventListener("click",function(){fill(seven,2,0)})
eight.addEventListener("click",function(){fill(eight,2,1)})
nine.addEventListener("click",function(){fill(nine,2,2)})

function create2dArray(rowcount){
    var arr = []
    for(var i = 0 ; i<rowcount ; i++){
      arr[i] = []
    }
    return arr
}
//Populates Array
function fillArray(array){
  var dash = "-"
  for(var i = 0 ; i<3 ; i++){
    for(var j = 0 ; j<3 ; j++){
      array[i][j] = dash
    }
  }
}
var move = false;
//Check if the game is over

function gameOver(check,par,table){
  if(check.includes("XXX")||check.includes("OOO")){
    if(check.includes("XXX")){
    par.textContent =  "X win"
    par.style.color = "red"
    par.style.fontWeight = "bolder"
    par.style.fontSize = "12px"
    table.style.borderColor = "red"
    window.location.href = "winning.html";
    return true
   }
   else if (check.includes("OOO"))
   {
    par.textContent = "O win"
    par.style.color = "red"
    par.style.fontWeight = "bolder"
    par.style.fontSize = "12px"
    table.style.borderColor = "red"
    window.location.href = "winning.html";
    return true
  }
   else
   {
    par.textContent = "Draw"
    par.style.color = "red"
    par.style.fontWeight = "bolder"
    par.style.fontSize = "12px"
    table.style.borderColor = "red"
    return true
   }
  }
}

function checkStatus(array){
  var par = document.querySelector(".header")
  var checkstr = ""

  //Vertically check if the game is over
  for(var i = 0 ; i<3 ; i++){
    for(var j = 0 ; j<3 ; j++){
      checkstr=checkstr.concat(array[j][i])
    }
  }
  if(gameOver(checkstr,par,table)){
    return
  }

  //Horizontally check if the game is over
  checkstr = ""
  for(var i = 0 ; i<3 ; i++){
    for(var j = 0 ; j<3 ; j++){
      checkstr=checkstr.concat(array[i][j])
    }

  }
  if(gameOver(checkstr,par,table)){
    return
  }

  //Diagonal checks
  checkstr = ""

  for(var i = 0 ; i<3 ; i++){
    checkstr=checkstr.concat(array[i][i])
  }
  if(gameOver(checkstr,par,table)){
    return
  }
  checkstr = ""
  var index = 2;
  for(var i = 0 ; i<3 ; i++){
    checkstr=checkstr.concat(array[i][index-i])
  }
  if(gameOver(checkstr,par,table)){
    return
  }
}
function fill(cell,i,j){
  if(cell.textContent == "" && move === false){
    cell.textContent = "X"
    cell.style.backgroundColor = "#41D878";
    cell.style.fontSize = "xx-large"
    array[i][j] = "X"
    move = true;

  }
  else if(cell.textContent == "" && move === true){
    cell.textContent = "O"
    cell.style.fontSize = "xx-large"
    array[i][j] = "O"
    move = false;
  }
  checkStatus(array)
}
