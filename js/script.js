var gPopupBtn = document.querySelector(".btn-G");
var mPopupBtn = document.querySelector(".btn-M");
var cPopupBtn = document.querySelector(".btn-C");
var mcPopupBtn = document.querySelector(".btn-MC");
var ePopupBtn = document.querySelector(".btn-E");
var pPopupBtn = document.querySelector(".btn-P");
var dPopupBtn = document.querySelector(".btn-D");
var closePopupBtn = document.querySelector(".popup-close-btn");
const api_url = 'https://akhileshchitte.github.io/dustbinapi/dustbin.json'
var city = document.querySelector(".city");
var deviceid = document.querySelector("#deviceid");
var currentStatus = document.querySelector("#cureentStatus");
var lastUpdated = document.querySelector("#lastUpdated");
var dustbincontainer = document.querySelector(".dustbincontainer");

gPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[2].name;
  deviceid.textContent = data[2].id;
  cureentStatus.textContent = data[2].currentStatus;
  lastUpdated.textContent = data[2].LastUpdated;
  dustbincontainer.style.height = '80px';
  dustbincontainer.style.backgroundColor = 'rgba(255, 165, 0, 0.7)';
});


mPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[1].name;
  deviceid.textContent = data[1].id;
  cureentStatus.textContent = data[1].currentStatus;
  lastUpdated.textContent = data[1].LastUpdated;
  dustbincontainer.style.height = '110px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(255, 69, 0, 0.7)';
});

cPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[0].name;
  deviceid.textContent = data[0].id;
  cureentStatus.textContent = data[0].currentStatus;
  lastUpdated.textContent = data[0].LastUpdated;
  document.querySelector(".dustbincontainer").style.height = '30px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(11, 156, 49, 0.7)';
});

mcPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[3].name;
  deviceid.textContent = data[3].id;
  cureentStatus.textContent = data[3].currentStatus;
  lastUpdated.textContent = data[3].LastUpdated;
  document.querySelector(".dustbincontainer").style.height = '142px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
});

ePopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[4].name;
  deviceid.textContent = data[4].id;
  cureentStatus.textContent = data[4].currentStatus;
  lastUpdated.textContent = data[4].LastUpdated;
  document.querySelector(".dustbincontainer").style.height = '90px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(255, 165, 0, 0.7)';

});

pPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[5].name;
  deviceid.textContent = data[5].id;
  cureentStatus.textContent = data[5].currentStatus;
  lastUpdated.textContent = data[5].LastUpdated;
  document.querySelector(".dustbincontainer").style.height = '60px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(11, 156, 49, 0.7)';
});

dPopupBtn.addEventListener("click",async function(){
  const response = await fetch(api_url);
  const data = await response.json();
  document.body.classList.add("popup-active");
  city.textContent = data[6].name;
  deviceid.textContent = data[6].id;
  cureentStatus.textContent = data[6].currentStatus;
  lastUpdated.textContent = data[6].LastUpdated;
  document.querySelector(".dustbincontainer").style.height = '100px';
  document.querySelector(".dustbincontainer").style.backgroundColor = 'rgba(255, 69, 0, 0.7)';
});


// closeButton
closePopupBtn.addEventListener("click", function(){
  document.body.classList.remove("popup-active");
});


function validate(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if(username == "akhilesh" && password == "Pass@123"){
    alert("Login Successfully");
    return false;
  }else{
//     alert("Login Failed");
    document.querySelector("#form").action = "https://akhileshchitte.github.io/skip-management-system/";
  }
}

// api

async function getDustbin(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}
getDustbin();
