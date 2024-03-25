const pwDiffChecker = document.getElementById("pwBox");
const leftPW = document.getElementById("password");
const rightPW = document.getElementById("password-confirm");
const pwText = document.getElementById("password-err");
pwDiffChecker.addEventListener('keyup', livePwCheck);

function livePwCheck() {
    if (validPw()) {
        leftPW.classList.remove('error');
        rightPW.classList.remove('error');
        pwText.textContent = " ";
    } else if (leftPW.value == "") {
        leftPW.classList.add('error');
        rightPW.classList.add('error');
        pwText.textContent = "*Password required";
    } else {
        leftPW.classList.add('error');
        rightPW.classList.add('error');
        pwText.textContent = "*Passwords do not match";
    }
}

function validPw() {
    return leftPW.value == rightPW.value && leftPW.value != "";
}


const showHide = document.getElementById('showHide');
showHide.addEventListener('mousedown', togglePw);

function togglePw() {
    if (leftPW.hasAttribute('type')) {
        leftPW.removeAttribute('type');
        rightPW.removeAttribute('type');
    } else {
        leftPW.setAttribute('type','password')
        rightPW.setAttribute('type','password')
    }
}


const email = document.getElementById('email');
const emailText = document.getElementById("email-err");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
email.addEventListener('keyup', liveEmailCheck);

function liveEmailCheck() {
    if (validEmail()) {
        email.classList.remove('error');
        emailText.textContent = " ";
    } else {
        email.classList.add('error');
        emailText.textContent = "*Invalid email";
    }
}

function validEmail() {
    return email.value != "" && email.value.match(emailRegex);
}

const phone = document.getElementById('phone');
const phoneText = document.getElementById('phone-err');
const phoneRegex = /^[\d]{10,12}$/;
phone.addEventListener('keyup', livePhoneCheck);

function livePhoneCheck() {
    if (validPhone()) {
        phone.classList.remove('error');
        phoneText.textContent = ' ';
    } else {
        phone.classList.add('error');
        phoneText.textContent = '*Invalid phone number';
    }
}

function validPhone() {
    return phone.value != "" && phone.value.match(phoneRegex);
}

const first = document.getElementById('firstName');
const firstText = document.getElementById('first-err');
first.addEventListener('keyup', liveFirstcheck);

function liveFirstcheck() {
    if (validFirst()) {
        first.classList.remove('error');
        firstText.textContent = ' ';
    } else {
        first.classList.add('error');
        firstText.textContent = '*Invalid first name';
    }
}

function validFirst() {
    return first.value != "";
}


const last = document.getElementById('lastName');
const lastText = document.getElementById('last-err');
last.addEventListener('keyup', liveLastcheck);

function liveLastcheck() {
    if (validLast()) {
        last.classList.remove('error');
        lastText.textContent = ' ';
    } else {
        last.classList.add('error');
        lastText.textContent = '*Invalid last name';
    }
}

function validLast() {
    return last.value != "";
}


const submitted = document.getElementById('submitMe')
submitted.addEventListener('mouseup', submitMe);

function submitMe() {
    if (validEmail() && validFirst() && validLast() && validPhone() && validPw()) {
        console.log('Name: ' + first.value + ' ' + last.value);
        console.log('Email: ' + email.value);
        console.log('Phone: ' + phone.value);
        console.log('Password: ' + leftPW.value);
        console.log('--------------------');
        alert("Information exported to console. Press ctrl + shift + j to check.");
    } else {
        alert("Double check your information.");
    }
}