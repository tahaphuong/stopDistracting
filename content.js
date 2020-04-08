// function clicked(e) {
//   chrome.tabs.executeScript({
//     code: 'document.getElementsByTagName("html")[0].style.fontSize="' + e.target.id + '"'
//   });
//   window.close();
// }
// document.addEventListener('DOMContentLoaded', function(){
//   let divs = document.querySelectorAll('div')
//   for (let d of divs) {
//     d.addEventListener("click", clicked)
//   }
// })

console.log('it runs')

window.onload = function() {
  document.getElementsByTagName("style")[0].innerHTML += stylePopup;
  document.getElementsByTagName("body")[0].innerHTML += popup;
  document.getElementsByTagName("head")[0].innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap" rel="stylesheet">';

  let yes_thp = document.getElementById("yes_thp");
  yes_thp.addEventListener("click", this.closeModalTHP, false);

  let no_thp = document.getElementById("no_thp");
  no_thp.addEventListener("click", this.openSuggestionsTHP, false);

}

function closeModalTHP() {
  document.getElementById('main_thp').style.display = 'none'
}
function openSuggestionsTHP() {
  document.getElementById("dynamic").innerHTML = suggestions;

}


const popup = `<div id="main_thp" style="position: fixed; z-index: 9999; display: fixed; top: 0; left: 0">
<div class="modal-box_thp" id="dynamic">
  <div><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/></div>
  <div class="mess_thp">
    You're going to spend time on unnecessary stuffs. Do you want to continue?
  </div>

  <div id="options_thp">
    <div id="yes_thp" onclick="closeModalTHP()">Yes, just relax a little</div>
    <div id="no_thp" onclick="openSuggestionsTHP()">No! I will do something more meaningful!</div>
  </div>
</div>
</div>
`

const mainModalTHP = `
<div><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/><img src="https://cdn0.iconfinder.com/data/icons/small-v6/512/bone_dead_death_head_skeleton_skull-512.png" width="35px"/></div>
<div class="mess_thp">
You're going to spend time on unnecessary stuffs. Do you want to continue?
</div>

<div id="options_thp">
  <div id="yes_thp">Yes, just relax a little</div>
  <div id="no_thp">No! I will do something more meaningful!</div>
</div>
`
const suggestions = `
<div style="color: black; font-size: 16px; margin-bottom: 10px">I have some suggestions for you here:</div>
<a class="suggest_thp" style="color: black; text-decoration: none;" href="https://www.swr.de/">deutsche Zeitung lesen</a>
<a class="suggest_thp" style="color: black; text-decoration: none;" href="https://www.programiz.com/java-programming">Learn Java</a>
<a class="suggest_thp" style="color: black; text-decoration: none;" href="https://www.hackerrank.com/">Practice algorithms</a>

`
const stylePopup = `
html, body {
margin: 0;
padding: 0;
}


#main_thp {
padding: 0;
margin: 0;

height: 100vh;
width: 100vw;
background-color: rgba(0, 0, 0, 0.5);

position: fixed;
z-index: 9999 !important;

display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

font-family: 'Nunito Sans', sans-serif;
}

.modal-box_thp {
height: 200px;
width: 450px;
background-color: rgba(251, 251, 251);
border-radius: 7px;

position: fixed;
padding: 15px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font-size: 22px;
}

.modal-box_thp div:first-child, .back-button_thp {
color: rgb(158, 49, 49)
}
.mess_thp {
text-align: justify;
margin-bottom: 20px;
}
#options_thp {
width: 100%;

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
}

#yes_thp, #no_thp {
cursor: pointer;

border-radius: 0.4em;
background-color: rgba(230, 230, 230);
padding: 0.4em 0.7em;

font-size: 13px;
transition: all 0.3s;
}

.suggest_thp {
cursor: pointer
height: 1em;
width: fit-content;

background-color: rgba(230, 230, 230);
border-radius: 0.4em;
padding: 0.4em 0.7em;
margin-bottom: 0.5em;

font-size: 14px;
transition: all 0.3s;
}

#yes_thp:hover, #no_thp:hover, .suggest_thp:hover {
background-color: rgba(220, 220, 220);
transform: scale(1.05);
}
`

