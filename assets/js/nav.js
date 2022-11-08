/*! Version 22.11.08a */
// let projects = document.getElementById('projects');
// let closeProjects = document.getElementById('closeProjects');

let about = document.getElementById('about');
let linkAbout = document.getElementById('linkAbout');
let closeAbout = document.getElementById('closeAbout');

let work = document.getElementById('work');
let linkWork = document.getElementById('linkWork');
let closeWork = document.getElementById('closeWork');

let privacy = document.getElementById('privacy');
let linkPrivacy = document.getElementById('linkPrivacy');
let closePrivacy = document.getElementById('closePrivacy');

closeIntro.onclick = function () {
    toggleIntro();
}

function toggleIntro()  {
    let svgClose = document.getElementById('intro-svg');

    if (introContent.style.display === 'none') {
        introContent.style.display = 'block';
        svgClose.style.transform = 'none';
    } else {
        introContent.style.display = 'none';
        svgClose.style.transform = 'rotate(45deg)';
    }
}

linkAbout.onclick = function () {
    displayAbout();
}

linkWork.onclick = function () {
    displayWork();
}

linkPrivacy.onclick = function () {
    displayPrivacy();
    linkPrivacy.classList.toggle('active');
}

closeAbout.onclick = function () {
    hideAbout();
}

closeWork.onclick = function () {
    hideWork();
}

closePrivacy.onclick = function () {
    hidePrivacy();
    linkPrivacy.classList.remove('active');
}

function displayAbout() {
    about.classList.toggle('inUp');
    about.classList.toggle('outUp');

    work.classList.remove('inUp');
    work.classList.add('outUp');
    privacy.classList.remove('inUp');
    privacy.classList.add('outUp');
}

function displayWork() {
    work.classList.toggle('inUp');
    work.classList.toggle('outUp');

    about.classList.remove('inUp');
    about.classList.add('outUp');
    privacy.classList.remove('inUp');
    privacy.classList.add('outUp');
}

function displayPrivacy() {
    privacy.classList.toggle('inUp');
    privacy.classList.toggle('outUp');

    about.classList.remove('inUp');
    about.classList.add('outUp');
    work.classList.remove('inUp');
    work.classList.add('outUp');
}

function hideAbout()  {
    about.classList.remove('inUp');
    about.classList.add('outUp');
}

function hideWork()  {
    work.classList.remove('inUp');
    work.classList.add('outUp');
}

function hidePrivacy()  {
    privacy.classList.remove('inUp');
    privacy.classList.add('outUp');
}