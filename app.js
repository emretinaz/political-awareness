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
const labourPartyDatabaseRef = databaseRef.child('Labour_Party');
const labourPartyPositiveCommentsRef = labourPartyDatabaseRef.child('Labour_Party_Positive_Comments');
const labourPartyNegativeCommentsRef = labourPartyDatabaseRef.child('Labour_Party_Negative_Comments');
const manaPartyDatabaseRef = databaseRef.child('Mana_Party');
const manaPartyPositiveCommentsRef = manaPartyDatabaseRef.child('Mana_Party_Positive_Comments');
const manaPartyNegativeCommentsRef = manaPartyDatabaseRef.child('Mana_Party_Negative_Comments');
const maoriPartyDatabaseRef = databaseRef.child('Maori_Party');
const maoriPartyPositiveCommentsRef = maoriPartyDatabaseRef.child('Maori_Party_Positive_Comments');
const maoriPartyNegativeCommentsRef = maoriPartyDatabaseRef.child('Maori_Party_Negative_Comments');
const nationalPartyDatabaseRef = databaseRef.child('National_Party');
const nationalPartyPositiveCommentsRef = nationalPartyDatabaseRef.child('National_Party_Positive_Comments');
const nationalPartyNegativeCommentsRef = nationalPartyDatabaseRef.child('National_Party_Negative_Comments');
const nzdpscPartyDatabaseRef = databaseRef.child('New_Zealand_Democratic_Party_for_Social_Credit');
const nzdpscPartyPositiveCommentsRef = nzdpscPartyDatabaseRef.child('New_Zealand_Democratic_Party_for_Social_Credit_Positive_Comments');
const nzdpscPartyNegativeCommentsRef = nzdpscPartyDatabaseRef.child('New_Zealand_Democratic_Party_for_Social_Credit_Negative_Comments');
const nzfirstPartyDatabaseRef = databaseRef.child('New_Zealand_First_Party');
const nzfirstPartyPositiveCommentsRef = nzfirstPartyDatabaseRef.child('New_Zealand_First_Party_Positive_Comments');
const nzfirstPartyNegativeCommentsRef = nzfirstPartyDatabaseRef.child('New_Zealand_First_Party_Negative_Comments');

// Automation Arrays variables
let databaseArrayRef = [
    desiredPartyPositiveCommentsRef, desiredPartyNegativeCommentsRef,
    actPartyPositiveCommentsRef, actPartyNegativeCommentsRef,
    aclPartyPositiveCommentsRef, aclPartyNegativeCommentsRef,
    conservativePartyPositiveCommentsRef, conservativePartyNegativeCommentsRef,
    greenPartyPositiveCommentsRef, greenPartyNegativeCommentsRef,
    internetPartyPositiveCommentsRef, internetPartyNegativeCommentsRef,
    labourPartyPositiveCommentsRef, labourPartyNegativeCommentsRef,
    manaPartyPositiveCommentsRef, manaPartyNegativeCommentsRef,
    maoriPartyPositiveCommentsRef, maoriPartyNegativeCommentsRef,
    nationalPartyPositiveCommentsRef, nationalPartyNegativeCommentsRef,
    nzdpscPartyPositiveCommentsRef, nzdpscPartyNegativeCommentsRef,
    nzfirstPartyPositiveCommentsRef, nzfirstPartyNegativeCommentsRef
];
let databasePositioningArray = [
    "desiredPartyPositiveCommentsRef", "desiredPartyNegativeCommentsRef",
    "actPartyPositiveCommentsRef", "actPartyNegativeCommentsRef",
    "aclPartyPositiveCommentsRef", "aclPartyNegativeCommentsRef",
    "conservativePartyPositiveCommentsRef", "conservativePartyNegativeCommentsRef",
    "greenPartyPositiveCommentsRef", "greenPartyNegativeCommentsRef",
    "internetPartyPositiveCommentsRef", "internetPartyNegativeCommentsRef",
    "labourPartyPositiveCommentsRef", "labourPartyNegativeCommentsRef",
    "manaPartyPositiveCommentsRef", "manaPartyNegativeCommentsRef",
    "maoriPartyPositiveCommentsRef", "maoriPartyNegativeCommentsRef",
    "nationalPartyPositiveCommentsRef", "nationalPartyNegativeCommentsRef",
    "nzdpscPartyPositiveCommentsRef", "nzdpscPartyNegativeCommentsRef",
    "nzfirstPartyPositiveCommentsRef", "nzfirstPartyNegativeCommentsRef"
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
const buttonofmanapartypositivecomment = document.querySelector('#buttonofmanapartypositivecomment');
const buttonofmanapartynegativecomment = document.querySelector('#buttonofmanapartynegativecomment');
const buttonofmaoripartypositivecomment = document.querySelector('#buttonofmaoripartypositivecomment');
const buttonofmaoripartynegativecomment = document.querySelector('#buttonofmaoripartynegativecomment');
const buttonofnationalpartypositivecomment = document.querySelector('#buttonofnationalpartypositivecomment');
const buttonofnationalpartynegativecomment = document.querySelector('#buttonofnationalpartynegativecomment');
const buttonofnzdpscpartypositivecomment = document.querySelector('#buttonofnzdpscpartypositivecomment');
const buttonofnzdpscpartynegativecomment = document.querySelector('#buttonofnzdpscpartynegativecomment');
const buttonofnzfirstpartypositivecomment = document.querySelector('#buttonofnzfirstpartypositivecomment');
const buttonofnzfirstpartynegativecomment = document.querySelector('#buttonofnzfirstpartynegativecomment');



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
buttonoflabourpartypositivecomment.addEventListener('click', addToDatabase);
buttonoflabourpartynegativecomment.addEventListener('click', addToDatabase);
buttonofmanapartypositivecomment.addEventListener('click', addToDatabase);
buttonofmanapartynegativecomment.addEventListener('click', addToDatabase);
buttonofmaoripartypositivecomment.addEventListener('click', addToDatabase);
buttonofmaoripartynegativecomment.addEventListener('click', addToDatabase);
buttonofnationalpartypositivecomment.addEventListener('click', addToDatabase);
buttonofnationalpartynegativecomment.addEventListener('click', addToDatabase);
buttonofnzdpscpartypositivecomment.addEventListener('click', addToDatabase);
buttonofnzdpscpartynegativecomment.addEventListener('click', addToDatabase);
buttonofnzfirstpartypositivecomment.addEventListener('click', addToDatabase);
buttonofnzfirstpartynegativecomment.addEventListener('click', addToDatabase);


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

//// Labour Party

labourPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#labourpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#labourpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const labourpartypositivecomments = document.querySelector('#labourpartypositivecomments');
labourpartypositivecomments.addEventListener('click', function (e) {
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
        labourPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

labourPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#labourpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#labourpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const labourpartynegativecomments = document.querySelector('#labourpartynegativecomments');
labourpartynegativecomments.addEventListener('click', function (e) {
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
        labourPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var labourModal = document.getElementById('labourModal');
var labourmodalbtn = document.getElementById('labourmodalbtn');
var labourmodalclose = document.getElementById("labourmodalclose");
labourmodalbtn.addEventListener("click", function () {
    labourModal.style.display = "block";
})
labourmodalclose.addEventListener("click", function () {
    labourModal.style.display = "none";
})

//// Mana Party

manaPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#manapartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#manapartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const manapartypositivecomments = document.querySelector('#manapartypositivecomments');
manapartypositivecomments.addEventListener('click', function (e) {
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
        manaPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

manaPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#manapartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#manapartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const manapartynegativecomments = document.querySelector('#manapartynegativecomments');
manapartynegativecomments.addEventListener('click', function (e) {
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
        manaPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var manaModal = document.getElementById('manaModal');
var manamodalbtn = document.getElementById('manamodalbtn');
var manamodalclose = document.getElementById("manamodalclose");
manamodalbtn.addEventListener("click", function () {
    manaModal.style.display = "block";
})
manamodalclose.addEventListener("click", function () {
    manaModal.style.display = "none";
})

//// Maori Party

maoriPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#maoripartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#maoripartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const maoripartypositivecomments = document.querySelector('#maoripartypositivecomments');
maoripartypositivecomments.addEventListener('click', function (e) {
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
        maoriPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

maoriPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#maoripartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#maoripartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const maoripartynegativecomments = document.querySelector('#maoripartynegativecomments');
maoripartynegativecomments.addEventListener('click', function (e) {
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
        maoriPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var maoriModal = document.getElementById('maoriModal');
var maorimodalbtn = document.getElementById('maorimodalbtn');
var maorimodalclose = document.getElementById("maorimodalclose");
maorimodalbtn.addEventListener("click", function () {
    maoriModal.style.display = "block";
})
maorimodalclose.addEventListener("click", function () {
    maoriModal.style.display = "none";
})


//// National Party 

nationalPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nationalpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nationalpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const nationalpartypositivecomments = document.querySelector('#nationalpartypositivecomments');
nationalpartypositivecomments.addEventListener('click', function (e) {
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
        nationalPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

nationalPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nationalpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nationalpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const nationalpartynegativecomments = document.querySelector('#nationalpartynegativecomments');
nationalpartynegativecomments.addEventListener('click', function (e) {
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
        nationalPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var nationalModal = document.getElementById('nationalModal');
var nationalmodalbtn = document.getElementById('nationalmodalbtn');
var nationalmodalclose = document.getElementById("nationalmodalclose");
nationalmodalbtn.addEventListener("click", function () {
    nationalModal.style.display = "block";
})
nationalmodalclose.addEventListener("click", function () {
    nationalModal.style.display = "none";
})

/// The New Zealand Democratic Party for Social Credit 

nzdpscPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nzdpscpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nzdpscpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const nzdpscpartypositivecomments = document.querySelector('#nzdpscpartypositivecomments');
nzdpscpartypositivecomments.addEventListener('click', function (e) {
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
        nzdpscPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

nzdpscPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nzdpscpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nzdpscpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const nzdpscpartynegativecomments = document.querySelector('#nzdpscpartynegativecomments');
nzdpscpartynegativecomments.addEventListener('click', function (e) {
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
        nzdpscPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var nzdpscModal = document.getElementById('nzdpscModal');
var nzdpscmodalbtn = document.getElementById('nzdpscmodalbtn');
var nzdpscmodalclose = document.getElementById("nzdpscmodalclose");
nzdpscmodalbtn.addEventListener("click", function () {
    nzdpscModal.style.display = "block";
})
nzdpscmodalclose.addEventListener("click", function () {
    nzdpscModal.style.display = "none";
})


//// New Zealand First Party

nzfirstPartyPositiveCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nzfirstpartypositivecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nzfirstpartytop5positivecomments').innerHTML = toplist;
});
// upvoter
const nzfirstpartypositivecomments = document.querySelector('#nzfirstpartypositivecomments');
nzfirstpartypositivecomments.addEventListener('click', function (e) {
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
        nzfirstPartyPositiveCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

nzfirstPartyNegativeCommentsRef.on('value', function (snap) {
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
        const list = document.querySelector('#nzfirstpartynegativecomments').innerHTML = show;
    };
    array.sort(function (x, y) {
        return x.agreed - y.agreed;
    });
    let toplist = '';
    for (i = 1; i < 6; i++) {
        toplist += `<li class="upvote"></i><i class="w3-badge" style = "wordWrap: break-word;">
        ${array[array.length - [i]].agreed}</i> ${array[array.length - [i]].comments} </li>`;
    };
    document.querySelector('#nzfirstpartytop5negativecomments').innerHTML = toplist;
});
// upvoter
const nzfirstpartynegativecomments = document.querySelector('#nzfirstpartynegativecomments');
nzfirstpartynegativecomments.addEventListener('click', function (e) {
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
        nzfirstPartyNegativeCommentsRef.child(id).update(updateddata);
    };
    e.preventDefault();
});

var nzfirstModal = document.getElementById('nzfirstModal');
var nzfirstmodalbtn = document.getElementById('nzfirstmodalbtn');
var nzfirstmodalclose = document.getElementById("nzfirstmodalclose");
nzfirstmodalbtn.addEventListener("click", function () {
    nzfirstModal.style.display = "block";
})
nzfirstmodalclose.addEventListener("click", function () {
    nzfirstModal.style.display = "none";
})