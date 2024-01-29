const bdy = document.getElementById("body");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const country = document.getElementById("country");
const num = document.getElementById("num");
const state = document.getElementById("state");
const city = document.getElementById("city");
const vill = document.getElementById("Village");

if (localStorage.getItem("personInfo") !== null) {
  showInfo();
} else {
  let fname = prompt("Enter First Name");
  let lname = prompt("Enter Last Name");
  let country = prompt("Enter Country Name");
  let num = prompt("Enter Mobile Number");
  let state = prompt("Enter state Name");
  let city = prompt("Enter city Name");
  let vill = prompt("Enter village Name");

  let personInfo = {
    fname: fname,
    lname: lname,
    country: country,
    number: num,
    state: state,
    city: city,
    village: vill,
  };

  localStorage.setItem("personInfo", JSON.stringify(personInfo));
  showInfo();
}

function showInfo() {
  let info = JSON.parse(localStorage.getItem("personInfo"));
  console.log(info.fname);
  fname.innerText = info.fname;
  lname.innerText = info.lname;
  country.innerText = info.country;
  num.innerText = info.number;
  state.innerText = info.state;
  city.innerText = info.city;
  vill.innerText = info.village;
}

function changeTheme() {
  let btn = document.getElementById("dark-white");
  if (btn.innerText == "Dark Mode") {
    bdy.style.backgroundColor = "black";
    btn.innerText = "Light Mode";
    bdy.style.color = "white";
    btn.style.color = "white";
  } else {
    bdy.style.backgroundColor = "white";
    btn.innerText = "Dark Mode";
    bdy.style.color = "black";
    btn.style.color = "black";
  }
}
