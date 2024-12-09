"use strict";
const background = document.querySelector('.background');
const numberOfSpans = 300;
for (let i = 0; i < numberOfSpans; i++) {
    const span = document.createElement('span');
    const x = Math.random() * 100;
    const delay = Math.random() * 1;
    const duration = Math.random() * 5 + 5;
    span.style.left = `${x}vw`;
    span.style.animationDelay = `${delay}s`;
    span.style.animationDuration = `${duration}s`;
    background.appendChild(span);
}
function goTo() {
    window.location.href = "main.html";
}
function goBack() {
    window.location.href = "index.html";
}
function toggleSkills() {
    const skillsContent = document.getElementById('skills-content');
    const toggleButton = document.querySelector('.toggle-button');
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const cityElement = document.querySelector('input[name="city"]:checked');
    const city = cityElement ? cityElement.value : '';
    const skills = document.getElementById('Skills').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const graduationDate = document.getElementById('graduation-date').value;
    const jobTitle = document.getElementById('job-title').value;
    const companyName = document.getElementById('company-name').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const resumeContent = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${number}</p>
        <p><strong>City:</strong> ${city}</p>

        <h2>Skills</h2>
        <p>${skills}</p>

        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Date:</strong> ${graduationDate}</p>

        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
    `;
    alert("Resume Generated! Check the console for detailed content.");
    console.log(resumeContent);
}