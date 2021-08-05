const contactPage = document.createElement('div');
const contactHeader = document.createElement('div');
const firstContactSection = document.createElement('div');
const callText = document.createElement('p');
const callNumber = document.createElement('p');
const seperator1 = document.createElement('div');
const seperator2 = document.createElement('div');
const secondContactSection = document.createElement('div');
const addressText = document.createElement('p');
const addressNumber = document.createElement('p');
const lineBreak = document.createElement('br');
const thirdContactSection = document.createElement('div');
const emailLabel = document.createElement('p');
const emailForm = document.createElement('form');
const emailInput = document.createElement('input');

contactPage.setAttribute('id','contact-page');
contactPage.classList.add('page');
contactHeader.classList.add('contact-header');
firstContactSection.classList.add('contact-section');
callText.classList.add('label');
callNumber.classList.add('phone-text');
seperator1.classList.add('seperator');
seperator2.classList.add('seperator');
secondContactSection.classList.add('contact-section');
addressText.classList.add('label');
addressNumber.classList.add('address-text');
thirdContactSection.classList.add('contact-section');
thirdContactSection.setAttribute('id','contact-email');
emailLabel.classList.add('label');
emailInput.setAttribute('type','email');
emailInput.setAttribute('id','email');

emailForm.innerHTML = "&nbsp;";
emailForm.appendChild(emailInput);

emailLabel.innerHTML = "Email Us";
thirdContactSection.appendChild(emailLabel);
thirdContactSection.appendChild(emailForm);

addressText.innerHTML = "Visit Us";
secondContactSection.appendChild(addressText);
addressNumber.textContent += "13084 Address Name Street ";
addressNumber.appendChild(lineBreak);
addressNumber.textContent += "City Name, State 63128";
secondContactSection.appendChild(addressNumber);

callText.innerHTML = "Call Us";
callNumber.innerHTML = "314-960-2551";
firstContactSection.appendChild(callText);
firstContactSection.appendChild(callNumber);

contactHeader.innerHTML = "We would love to hear from you.";
contactPage.appendChild(contactHeader);
contactPage.appendChild(firstContactSection);
contactPage.appendChild(seperator1);
contactPage.appendChild(secondContactSection);
contactPage.appendChild(seperator2);
contactPage.appendChild(thirdContactSection);




export const contactPageTemplate = contactPage;
