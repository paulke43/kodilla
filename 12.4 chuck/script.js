window.onload = function () {

   const url = 'http://api.icndb.com/jokes/random';

   const button = document.getElementById("get-joke");
   const paragraph = document.getElementById("joke");

   button.addEventListener("click", function () {
      getJoke();
   });

   function getJoke() {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.addEventListener("load", function () {
         let response = JSON.parse(xhr.response);
         paragraph.innerHTML = response.value.joke;
      });
      xhr.send();
   }

   getJoke();
};