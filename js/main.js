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

    authorcreds_text.textContent = authorcreds.value;
    orgcreds_text.textContent = orgcreds.value;
    articletitle_text.textContent = articletitle.value;
    link_text.textContent = link.value;
    evidence_text = evidence.value;
}