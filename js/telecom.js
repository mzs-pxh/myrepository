 window.onload = function() {
     var zh1 = document.getElementById("zh1");
     var zh2 = document.getElementById("zh2");
     var cs1 = document.getElementById("cs1");
     var cs2 = document.getElementById("cs2");
     var cs3 = document.getElementById("cs3");
     var cs4 = document.getElementById("cs4");
     var cs5 = document.getElementById("cs5");
     var cs6 = document.getElementById("cs6");
     zh1.onclick = function () {
         over1();
     };
     zh2.onclick = function () {
         over2();
     };
     cs4.onclick = function () {
         over3();
     };
     cs5.onclick = function () {
         over4();
     };
     cs6.onclick = function () {
         over5();
     }
 };
 function over1() {
     zh2.style.fontWeight = "normal";
     zh1.style.fontWeight = "bolder";
     cs1.style.display = "block";
     cs2.style.display = "none";
 }
 function over2() {
     zh2.style.fontWeight = "bolder";
     zh1.style.fontWeight = "normal";
     cs2.style.display = "block";
     cs1.style.display = "none";
 }
 function  over3() {
     cs3.style.display = "block";
     cs4.style.display = "none";
     cs5.style.display = "block";
 }
 function  over4() {
     cs3.style.display= "none";
     cs4.style.display = "block";
     cs5.style.display = "none";
 }
 function  over5() {
     cs6.style.display = "none";
 }
