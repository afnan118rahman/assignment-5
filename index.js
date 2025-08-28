document.getElementById("heart").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart2").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart3").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart4").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart5").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart6").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart7").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart8").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})
document.getElementById("heart9").addEventListener("click", function(){
   const lifePoint =  parseInt(document.getElementById("life-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("life-point").innerText = lifeUp 
})



document.getElementById("clear").addEventListener("click", function(){
   document.getElementById("history-container").style.display = "none"
   
})

document.getElementById("call").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})


// card -------------/////////////
document.getElementById("call2").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline2").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number2").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card 3------------/////////////
document.getElementById("call3").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline3").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number3").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card 4------------/////////////
document.getElementById("call4").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline4").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number4").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card 5------------/////////////
document.getElementById("call5").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline5").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number5").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card6-------------/////////////
document.getElementById("call6").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline6").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number6").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card7-------------/////////////
document.getElementById("call7").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline7").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number7").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card 8 -------------/////////////
document.getElementById("call8").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline8").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number8").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})
// card 9 -------------/////////////
document.getElementById("call9").addEventListener("click", function(){
   const coin =  parseInt(document.getElementById("coin").innerText)
   const newCoin = coin - 20 ;
   const hotline = document.getElementById("hotline9").innerText;
   
   let now = new Date();
   const num = parseInt(document.getElementById("number9").innerText);
   const historyContainer = document.getElementById("history-container")
   let history = document.createElement("section");
   history.innerText =hotline +  "\n" + num  + "             " + now.toLocaleTimeString();
    
   if(coin < 20){
      alert("You do not have enough coins, you need at least 20 coin to make a call.")
      return;
   }
   if(coin => 20 ){
      alert("calling " + hotline + "  " + num)
      document.getElementById("coin").innerText = newCoin;
      historyContainer.appendChild(history);
   }
})




document.getElementById("copy1").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 2----------//////
document.getElementById("copy2").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number2").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 3----------//////
document.getElementById("copy3").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number3").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 4----------//////
document.getElementById("copy4").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number4").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 5----------//////
document.getElementById("copy5").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number5").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 6----------//////
document.getElementById("copy6").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number6").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 7----------//////
document.getElementById("copy7").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number7").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 8----------//////
document.getElementById("copy8").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number8").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})
/// copy 9----------//////
document.getElementById("copy9").addEventListener("click", function(){
   const num = parseInt(document.getElementById("number9").innerText);
   let tempInput = document.createElement("textarea");
      tempInput.value = num;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
   alert("Number copied:" +" " + num )
   const lifePoint =  parseInt(document.getElementById("copy-point").innerText)
    const lifeUp = lifePoint + 1 ;
   document.getElementById("copy-point").innerText = lifeUp 
})