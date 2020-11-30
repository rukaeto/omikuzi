"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click" , () => {
     //const results = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
     //const n = Math.floor(Math.random() * results.length);
     //btn.textContent = results[n];
     const n = Math.random();
     switch(true){
       case n< 0.23:
         btn.textContent ="大吉";
         break;
         case 0.23<=n && n< 0.33:
         btn.textContent ="吉";
         break;
         case 0.33<=n && n< 0.46:
         btn.textContent ="中吉";
         break;
         case 0.46<=n && n< 0.58:
         btn.textContent ="小吉";
         break;
         case 0.58<=n && n< 0.69:
         btn.textContent ="末吉";
         break;
         case 0.69<=n && n< 0.85:
         btn.textContent ="凶";
         break;
         case n >= 0.85:
         btn.textContent ="大凶";
         break;
     }
  })
}

//  switch(n){
//    case 0:
//      btn.textContent = "大吉";
//      break;
//    case 1:
//      btn.textContent = "吉";
//      break;
//    case 2:
//      btn.textContent = "中吉";
//      break;
//    case 3:
//    btn.textContent = "小吉";
//      break;
//    case 4:
//    btn.textContent = "末吉";
//      break;
//    case 5:
//    btn.textContent = "凶";
//      break;
//    case 6:
//    btn.textContent = "大凶";
//      break;
