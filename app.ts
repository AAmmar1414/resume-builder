const background:any = document.querySelector('.background');
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

function goTo(){
    window.location.href="main.html"
}

function goBack(){
    window.location.href="index.html"
}

function toggleSkills(): void {
  const skillsContent = document.getElementById('skills-content') as HTMLElement;
  const toggleButton = document.querySelector('.toggle-button') as HTMLButtonElement;

  if (skillsContent.style.display === 'none') {
      skillsContent.style.display = 'block';
      toggleButton.textContent = 'Hide Skills';
  } else {
      skillsContent.style.display = 'none';
      toggleButton.textContent = 'Show Skills';
  }
}

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;

    const cityElement = document.querySelector('input[name="city"]:checked') as HTMLInputElement | null;
    const city = cityElement ? cityElement.value : '';

    const skills = (document.getElementById('Skills') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const graduationDate = (document.getElementById('graduation-date') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const companyName = (document.getElementById('company-name') as HTMLInputElement).value;
    const startDate = (document.getElementById('start-date') as HTMLInputElement).value;
    const endDate = (document.getElementById('end-date') as HTMLInputElement).value;

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