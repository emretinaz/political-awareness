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
const aclPartyDatabaseRef = databaseRef.child('Aotearoa_Legalise_Cannabis_Party');
const aclPartyPositiveCommentsRef = aclPartyDatabaseRef.child('Aotearoa_Legalise_Cannabis_Party_Positive_Comments');
const aclPartyNegativeCommentsRef = aclPartyDatabaseRef.child('Aotearoa_Legalise_Cannabis_Party_Negative_Comments');
const conservativePartyDatabaseRef = databaseRef.child('Conservative_Party_of_New_Zealand');
const conservativePartyPositiveCommentsRef = conservativePartyDatabaseRef.child('Conservative_Party_of_New_Zealand_Positive_Comments');
const conservativePartyNegativeCommentsRef = conservativePartyDatabaseRef.child('Conservative_Party_of_New_Zealand_Negative_Comments');
const greenPartyDatabaseRef = databaseRef.child('Green_Party');
const greenPartyPositiveCommentsRef = greenPartyDatabaseRef.child('Green_Party_Positive_Comments');
const greenPartyNegativeCommentsRef = greenPartyDatabaseRef.child('Green_Party_Negative_Comments');
const internetPartyDatabaseRef = databaseRef.child('Internet_Party');
const internetPartyPositiveCommentsRef = internetPartyDatabaseRef.child('Internet_Party_Positive_Comments');
const internetPartyNegativeCommentsRef = internetPartyDatabaseRef.child('Internet_Party_Negative_Comments');

// Automation Arrays variables
let databaseArrayRef = [
    desiredPartyPositiveCommentsRef, desiredPartyNegativeCommentsRef,
    actPartyPositiveCommentsRef, actPartyNegativeCommentsRef,
    aclPartyPositiveCommentsRef, aclPartyNegativeCommentsRef,
    conservativePartyPositiveCommentsRef, conservativePartyNegativeCommentsRef,
    greenPartyPositiveCommentsRef, greenPartyNegativeCommentsRef,
    internetPartyPositiveCommentsRef, internetPartyNegativeCommentsRef
];
let databasePositioningArray = [
    "desiredPartyPositiveCommentsRef", "desiredPartyNegativeCommentsRef",
    "actPartyPositiveCommentsRef", "actPartyNegativeCommentsRef",
    "aclPartyPositiveCommentsRef", "aclPartyNegativeCommentsRef",
    "conservativePartyPositiveCommentsRef", "conservativePartyNegativeCommentsRef",
    "greenPartyPositiveCommentsRef", "greenPartyNegativeCommentsRef",
    "internetPartyPositiveCommentsRef", "internetPartyNegativeCommentsRef"
];

// Elements
const buttonofdesiredpartypositivecomment = document.querySelector('#buttonofdesiredpartypositivecomment');
const buttonofdesiredpartynegativecomment = document.querySelector('#buttonofdesiredpartynegativecomment');
const buttonofactpartypositivecomment = document.querySelector('#buttonofactpartypositivecomment');
const buttonofactpartynegativecomment = document.querySelector('#buttonofactpartynegativecomment');
const buttonofaclpartypositivecomment = document.querySelector('#buttonofaclpartypositivecomment');
const buttonofaclpartynegativecomment = document.querySelector('#buttonofaclpartynegativecomment');
const buttonofconservativepartypositivecomment = document.querySelector('#buttonofconservativepartypositivecomment');
const buttonofconservativepartynegativecomment = document.querySelector('#buttonofconservativepartynegativecomment');
const buttonofgreenpartypositivecomment = document.querySelector('#buttonofgreenpartypositivecomment');
const buttonofgreenpartynegativecomment = document.querySelector('#buttonofgreenpartynegativecomment');
const buttonofinternetpartypositivecomment = document.querySelector('#buttonofinternetpartypositivecomment');
const buttonofinternetpartynegativecomment = document.querySelector('#buttonofinternetpartynegativecomment');

// AddEventListeners
buttonofdesiredpartypositivecomment.addEventListener('click', addToDatabase);
buttonofdesiredpartynegativecomment.addEventListener('click', addToDatabase);
buttonofactpartypositivecomment.addEventListener('click', addToDatabase);
buttonofactpartynegativecomment.addEventListener('click', addToDatabase);
buttonofaclpartypositivecomment.addEventListener('click', addToDatabase);
buttonofaclpartynegativecomment.addEventListener('click', addToDatabase);
buttonofconservativepartypositivecomment.addEventListener('click', addToDatabase);
buttonofconservativepartynegativecomment.addEventListener('click', addToDatabase);
buttonofgreenpartypositivecomment.addEventListener('click', addToDatabase);
buttonofgreenpartynegativecomment.addEventListener('click', addToDatabase);
buttonofinternetpartypositivecomment.addEventListener('click', addToDatabase);
buttonofinternetpartynegativecomment.addEventListener('click', addToDatabase);

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
var actpModal = document.getElementById('actpModal');
var actmodalbtn = document.getElementById("actmodalbtn");
var actpmodalclose = document.getElementById("actpmodalclose");

actmodalbtn.addEventListener("click", function () {
    actpModal.style.display = "block";
})
actpmodalclose.addEventListener("click", function () {
    actpModal.style.display = "none";
})


/// Aotearoa Legalise Cannabis Party

aclPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#aclpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#aclpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const aclpartypositivecomments = document.querySelector('#aclpartypositivecomments');
aclpartypositivecomments.addEventListener('click', function (e) {
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
        aclPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

aclPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#aclpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#aclpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const aclpartynegativecomments = document.querySelector('#aclpartynegativecomments');
aclpartynegativecomments.addEventListener('click', function (e) {
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
        aclPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var alcpModal = document.getElementById('alcpModal');
var alcmodalbtn = document.getElementById("alcsmodalbtn");
var aclpmodalclose = document.getElementById("aclpmodalclose");
alcmodalbtn.addEventListener("click", function () {
    alcpModal.style.display = "block";
})
aclpmodalclose.addEventListener("click", function () {
    alcpModal.style.display = "none";
})

//// Conservative Party of New Zealand

conservativePartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#conservativepartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#conservativepartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const conservativepartypositivecomments = document.querySelector('#conservativepartypositivecomments');
conservativepartypositivecomments.addEventListener('click', function (e) {
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
        conservativePartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

conservativePartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#conservativepartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#conservativepartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const conservativepartynegativecomments = document.querySelector('#conservativepartynegativecomments');
conservativepartynegativecomments.addEventListener('click', function (e) {
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
        conservativePartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var conservativeModal = document.getElementById('conservativeModal');
var conservativemodalbtn = document.getElementById('conservativemodalbtn');
var conservativemodalclose = document.getElementById("conservativemodalclose");
conservativemodalbtn.addEventListener("click", function () {
    conservativeModal.style.display = "block";
})
conservativemodalclose.addEventListener("click", function () {
    conservativeModal.style.display = "none";
})


//// Green Party 

greenPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#greenpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#greenpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const greenpartypositivecomments = document.querySelector('#greenpartypositivecomments');
greenpartypositivecomments.addEventListener('click', function (e) {
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
        greenPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

greenPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#greenpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#greenpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const greenpartynegativecomments = document.querySelector('#greenpartynegativecomments');
greenpartynegativecomments.addEventListener('click', function (e) {
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
        greenPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var greenModal = document.getElementById('greenModal');
var greenmodalbtn = document.getElementById('greenmodalbtn');
var greenmodalclose = document.getElementById("greenmodalclose");
greenmodalbtn.addEventListener("click", function () {
    greenModal.style.display = "block";
})
greenmodalclose.addEventListener("click", function () {
    greenModal.style.display = "none";
})


//// Internet Party

internetPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#internetpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#internetpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const internetpartypositivecomments = document.querySelector('#internetpartypositivecomments');
internetpartypositivecomments.addEventListener('click', function (e) {
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
        internetPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

internetPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#internetpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#internetpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const internetpartynegativecomments = document.querySelector('#internetpartynegativecomments');
internetpartynegativecomments.addEventListener('click', function (e) {
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
        internetPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var internetModal = document.getElementById('internetModal');
var internetmodalbtn = document.getElementById('internetmodalbtn');
var internetmodalclose = document.getElementById("internetmodalclose");
internetmodalbtn.addEventListener("click", function () {
    internetModal.style.display = "block";
})
internetmodalclose.addEventListener("click", function () {
    internetModal.style.display = "none";
})

