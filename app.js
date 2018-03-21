// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGsnWqn8AxkexMVe5meNcx-xGOxGAg1BE",
    authDomain: "political-awareness-platform.firebaseapp.com",
    databaseURL: "https://political-awareness-platform.firebaseio.com",
    projectId: "political-awareness-platform",
    storageBucket: "",
    messagingSenderId: "49752973986"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
// Database References
const desiredPartyDatabaseRef = databaseRef.child('Desired_Party');
const desiredPartyPositiveCommentsRef = desiredPartyDatabaseRef.child('Desired_Party_Positive_Comments');
const desiredPartyNegativeCommentsRef = desiredPartyDatabaseRef.child('Desired_Party_Negative_Comments');
const actPartyDatabaseRef = databaseRef.child('ACT_Party');
const actPartyPositiveCommentsRef = actPartyDatabaseRef.child('ACT_Party_Positive_Comments');
const actPartyNegativeCommentsRef = actPartyDatabaseRef.child('ACT_Party_Negative_Comments');


// Automation Arrays variables
let databaseArrayRef = [
    desiredPartyPositiveCommentsRef, desiredPartyNegativeCommentsRef,
    actPartyPositiveCommentsRef, actPartyNegativeCommentsRef
];

let databasePositioningArray = [
    "desiredPartyPositiveCommentsRef", "desiredPartyNegativeCommentsRef",
    "actPartyPositiveCommentsRef", "actPartyNegativeCommentsRef"
];


// Elements
const buttonofdesiredpartypositivecomment = document.querySelector('#buttonofdesiredpartypositivecomment');
const buttonofdesiredpartynegativecomment = document.querySelector('#buttonofdesiredpartynegativecomment');
const buttonofactpartypositivecomment = document.querySelector('#buttonofactpartypositivecomment');
const buttonofactpartynegativecomment = document.querySelector('#buttonofactpartynegativecomment');


// AddEventListeners
buttonofdesiredpartypositivecomment.addEventListener('click', addToDatabase);
buttonofdesiredpartynegativecomment.addEventListener('click', addToDatabase);
buttonofactpartypositivecomment.addEventListener('click', addToDatabase);
buttonofactpartynegativecomment.addEventListener('click', addToDatabase);

// Functions
function addToDatabase(e) {
    let pickedId = e.target.childNodes[0].parentElement.previousElementSibling.id;
    let info = document.getElementById(pickedId).value;
    if (info === '') {
        var x = document.getElementById("snackbar")
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    } else {
        databaseArrayRef[databasePositioningArray.indexOf(pickedId)].push({ "Comment": info, "Agreed": 0 });
    }
    e.preventDefault();
};

// UpVoter
const desiredpartypositivecomments = document.querySelector('#desiredpartypositivecomments');
desiredpartypositivecomments.addEventListener('click', function (e) {
    //   console.log(e.target);
    if (e.target.classList.contains('upvote')) {
        // console.log(e.target.childNodes);
        var currentNumber = parseInt(e.target.childNodes[1].innerText);
        // console.log(currentNumber);
        var updatednumber = currentNumber + 1;
        // console.log(updatednumber);
        var id = e.target.id;
        // console.log(id);
        var updateddata = {
            "Agreed": updatednumber
        };
        desiredPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

const desiredpartynegativecomments = document.querySelector('#desiredpartynegativecomments');
desiredpartynegativecomments.addEventListener('click', function (e) {
    if (e.target.classList.contains("upvote")) {
        // console.log(e.target.childNodes);
        var currentNumber = parseInt(e.target.childNodes[1].innerText);
        // console.log(currentNumber);
        var updatednumber = currentNumber + 1;
        // console.log(updatednumber);
        var id = e.target.id;
        // console.log(id);
        var updateddata = {
            "Agreed": updatednumber
        };
        desiredPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
}
);

// RealTime Database Show
desiredPartyPositiveCommentsRef.on('value', function (snap) {
    const li = document.createElement('li');
    let keys = Object.keys(snap.val());
    let show = '';
    let array = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var comments = snap.val()[k].Comment;
        var agreed = snap.val()[k].Agreed;
        var object = { k, comments, agreed };
        array.push(object);
        li.appendChild(document.createTextNode(comments));
        show += `<li id="${k}" class="upvote"> 
        <span class="fa-layers">
        <i class="fas fa-thumbs-up fa-2x"></i>
        <span class="fa-layers-counter fa-4x" style="background:Tomato">${agreed}</span>
        </span> <span class="w3-margin-left">${comments}</span></li>`;
        const list = document.querySelector('#desiredpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#desiredpartytop5positivecomments').innerHTML = toplist;
});

desiredPartyNegativeCommentsRef.on('value', function (snap) {
    const li = document.createElement('li');
    let keys = Object.keys(snap.val());
    let show = '';
    let array = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var comments = snap.val()[k].Comment;
        var agreed = snap.val()[k].Agreed;
        var object = { k, comments, agreed };
        array.push(object);
        li.appendChild(document.createTextNode(comments));
        show += `<li id="${k}" class="upvote"> 
        <span class="fa-layers">
        <i class="fas fa-thumbs-up fa-2x"></i>
        <span class="fa-layers-counter fa-4x" style="background:Tomato">${agreed}</span>
        </span> <span class="w3-margin-left">${comments}</span></li>`;
        const list = document.querySelector('#desiredpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#desiredpartytop5negativecomments').innerHTML = toplist;
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////                                                                                                    //////
//////                                            Parties                                                 //////
//////                                                                                                    //////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// ACT Party
//databaseshow
actPartyPositiveCommentsRef.on('value', function (snap) {
    const li = document.createElement('li');
    let keys = Object.keys(snap.val());
    let show = '';
    let array = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var comments = snap.val()[k].Comment;
        var agreed = snap.val()[k].Agreed;
        var object = { k, comments, agreed };
        array.push(object);
        li.appendChild(document.createTextNode(comments));
        show += `<li id="${k}" class="upvote"> 
        <span class="fa-layers">
        <i class="fas fa-thumbs-up fa-2x"></i>
        <span class="fa-layers-counter fa-4x" style="background:Tomato">${agreed}</span>
        </span> <span class="w3-margin-left">${comments}</span></li>`;
        const list = document.querySelector('#actpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#actpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const actpartypositivecomments = document.querySelector('#actpartypositivecomments');
actpartypositivecomments.addEventListener('click', function (e) {
    //   console.log(e.target);
    if (e.target.classList.contains('upvote')) {
        // console.log(e.target.childNodes);
        var currentNumber = parseInt(e.target.childNodes[1].innerText);
        // console.log(currentNumber);
        var updatednumber = currentNumber + 1;
        // console.log(updatednumber);
        var id = e.target.id;
        // console.log(id);
        var updateddata = {
            "Agreed": updatednumber
        };
        actPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

actPartyNegativeCommentsRef.on('value', function (snap) {
    const li = document.createElement('li');
    let keys = Object.keys(snap.val());
    let show = '';
    let array = [];
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var comments = snap.val()[k].Comment;
        var agreed = snap.val()[k].Agreed;
        var object = { k, comments, agreed };
        array.push(object);
        li.appendChild(document.createTextNode(comments));
        show += `<li id="${k}" class="upvote"> 
        <span class="fa-layers">
        <i class="fas fa-thumbs-up fa-2x"></i>
        <span class="fa-layers-counter fa-4x" style="background:Tomato">${agreed}</span>
        </span> <span class="w3-margin-left">${comments}</span></li>`;
        const list = document.querySelector('#actpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#actpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const actpartynegativecomments = document.querySelector('#actpartynegativecomments');
actpartynegativecomments.addEventListener('click', function (e) {
    //   console.log(e.target);
    if (e.target.classList.contains('upvote')) {
        // console.log(e.target.childNodes);
        var currentNumber = parseInt(e.target.childNodes[1].innerText);
        // console.log(currentNumber);
        var updatednumber = currentNumber + 1;
        // console.log(updatednumber);
        var id = e.target.id;
        // console.log(id);
        var updateddata = {
            "Agreed": updatednumber
        };
        actPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});


// Modal trigers 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("actmodalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


