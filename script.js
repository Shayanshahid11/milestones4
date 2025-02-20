// get refrences to the form and display area 
var form = document.getElementById('resumeform');
var resumeDisplayElemants = document.getElementById('resume-display');
// Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent pagr reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // genrate the resume content dynamicly
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>personal information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, " </span> </p>\n      <p><b>Email:</b><span contenteditable=\"true\">").concat(email, " </span> </p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, " </span> </p>\n         \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n          <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n          <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display the generated resume 
    if (resumeDisplayElemants) {
        resumeDisplayElemants.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display elements is missing.');
    }
});
