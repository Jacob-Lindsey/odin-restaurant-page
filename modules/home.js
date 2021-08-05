const homePage = document.createElement('div');
const logoContainer = document.createElement('div');
const logoImage = document.createElement('img');
const nameText = document.createElement('p');
const nameSubtitleText = document.createElement('p');
const hoursContainer = document.createElement('div');
const hoursUL = document.createElement('ul');
const hoursSun = document.createElement('li');
const hoursMonThurs = document.createElement('li');
const hoursFriSat = document.createElement('li');

homePage.setAttribute('id','home-page');
homePage.classList.add('page');
logoContainer.classList.add('logo-container');
logoImage.classList.add('logo');
nameText.classList.add('name');
nameSubtitleText.classList.add('name-subtitle');
hoursContainer.classList.add('hours');
hoursUL.classList.add('hours');

logoImage.setAttribute('src','../src/logo-colorized.png');

nameText.innerHTML = "Veitingastaður";
nameSubtitleText.innerHTML = "Norse Diner";

hoursSun.innerHTML = "Sunday - 10AM-9PM";
hoursMonThurs.innerHTML = "Monday-Thursday - 10AM-10PM";
hoursFriSat.innerHTML = "Friday-Saturday - 10AM-12AM";

hoursUL.appendChild(hoursSun);
hoursUL.appendChild(hoursMonThurs);
hoursUL.appendChild(hoursFriSat);
hoursContainer.appendChild(hoursUL);
logoContainer.appendChild(logoImage);
logoContainer.appendChild(nameText);
logoContainer.appendChild(nameSubtitleText);
homePage.appendChild(logoContainer);
homePage.appendChild(hoursContainer);

{/* <div id="home-page" class="page">
<div class="logo-container">
  <img class="logo" src="../src/logo-colorized.png">
  <p class="name">Veitingastaður</p>
  <p class="name-subtitle">Norse Diner</p>
</div>
<div class="hours">
  <ul>
    <li>Sunday - 10AM-9PM</li>
    <li>Monday-Thursday - 10AM-10PM</li>
    <li>Friday-Saturday - 10AM-12AM</li>
  </ul>
</div>
</div> */}

export const homePageTemplate = homePage;