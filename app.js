//https://www.acme-api.com/api/companies
let loadButton = document.querySelector('#loadButton');
let loadRandomButton = document.querySelector('#loadRandomButton');
console.log(loadRandomButton);
let list = document.querySelector('#usersList');
let h1 = document.querySelector('#randomH1');
console.log(h1);
let companyBtn = document.querySelector ("#randomCompanyBtn");
let randomCompany = document.querySelector("#companies");


loadButton.addEventListener('click', function(){
  loadUsers();
});

loadRandomButton.addEventListener('click', function(){
  loadRandomUser();
});

companyBtn.addEventListener('click', function(){
  console.log("Hello World")
  company();
});

async function loadRandomUser(){
  let response = await fetch('https://www.acme-api.com/api/users/random');
  let user = await response.json();
  randomH1.innerText = user.fullName;
}

async function loadUsers(){
  let response = await fetch('https://www.acme-api.com/api/users');
  let data = await response.json();
  let users = data.users;
  for(let i = 0; i < users.length; i++){
    let user = users[i];
    let li = document.createElement('li');
    li.innerText = user.fullName;
    list.appendChild(li);
  }
};


async function company(){
  let response = await fetch ("https://www.acme-api.com/api/companies");
  let companyObj = await response.json();
  for(let i = 0; i < companyObj.length; i++){
    let li = document.createElement('li');
    li.innerText = companyObj[i].name;
    randomCompany.appendChild(li);
}
};