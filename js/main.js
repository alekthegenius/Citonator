var author = document.getElementById('author');
var organization = document.getElementById('organization');
var dpublish = document.getElementById('dpublish');
var dupdated = document.getElementById('dupdated');
var daccessed = document.getElementById('daccessed');
var authorcreds = document.getElementById('authorcreds');
var orgcreds = document.getElementById('orgcreds');
var articletitle = document.getElementById('articletitle');
var link = document.getElementById('link');
var evidence = document.getElementById('evidence');
var generated_text = document.getElementById('generated_text');

var authortext = document.getElementById('authortext');
var organizationtext = document.getElementById('organizationtext');
var dpublish_text = document.getElementById('dpublish_text');
var dupdated_text = document.getElementById('dupdated_text');
var daccessed_text = document.getElementById('daccessed_text');
var authorcreds_text = document.getElementById('authorcreds_text');
var orgcreds_text = document.getElementById('orgcreds_text');
var articletitle_text = document.getElementById('articletitle_text');
var link_text = document.getElementById('link_text');
var evidence_text = document.getElementById('evidence_text');

var search_engine = "Squawkrates"

var search_dict = {};
search_dict["Google"] = "https://www.google.com/search?q=";
search_dict["Duckduckgo"] = "https://duckduckgo.com/?va=h&t=hy&q=";
search_dict["Squawkrates"] = "https://squawkrates.vercel.app/?query=";

changeSize(11)
changeEvidenceSize(12)

function generateCitation() {
    authortext.textContent = author.value;
    organizationtext.textContent = organization.value;
    if (dpublish.value != '') {
        dpublish_text.textContent = "Date Published: " + String(dpublish.value).split("-")[1] + "/" + String(dpublish.value).split("-")[2] + "/" + String(dpublish.value).split("-")[0];
    } else {
        dpublish_text.textContent = "";
    }
    
    if (dupdated.value != '') {
        dupdated_text.textContent = "Date Updated: " + String(dupdated.value).split("-")[1] + "/" + String(dupdated.value).split("-")[2] + "/" + String(dupdated.value).split("-")[0];
    } else {
        dupdated_text.textContent = "";
    }
    
    if (daccessed.value != '') {
        daccessed_text.textContent = "Date Accessed: " + String(daccessed.value).split("-")[1] + "/" + String(daccessed.value).split("-")[2] + "/" + String(daccessed.value).split("-")[0];
    } else {
        daccessed_text.textContent = "";
    }

    authorcreds_text.textContent = "(" + authorcreds.value + ")";
    orgcreds_text.textContent = "(" + orgcreds.value + ")";
    articletitle_text.textContent = '"' + articletitle.value + '"';
    link_text.textContent = link.value;
    evidence_text.textContent = evidence.value;
}

function setDate() {
    daccessed.value = new Date().toISOString().split('T')[0];
}

function changeFont(font) {
    document.getElementById("generated_text").style.fontFamily = font
}

function changeSize(size) {
    authortext.style.fontSize = size
    organizationtext.style.fontSize = size
    dpublish_text.style.fontSize = size
    dupdated_text.style.fontSize = size
    daccessed_text.style.fontSize = size
    authorcreds_text.style.fontSize = size
    orgcreds_text.style.fontSize = size
    articletitle_text.style.fontSize = size
    link_text.style.fontSize = size
}

function changeEvidenceSize(size) {
    document.getElementById("evidence_text").style.fontSize = size
}

function searchEngine(engine) {
    var search_engine = engine
}

function openLink(search_engine, id) {
    url = search_dict[search_engine]
    if (document.getElementById(id).value != '') {
        window.open(url + document.getElementById(id).value.replaceAll(' ', '+'));
    }
    
}

