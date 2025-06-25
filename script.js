document.getElementById("name").textContent = profileData.name;
document.getElementById("title").textContent = profileData.title;
document.getElementById("summary").textContent = profileData.summary;
document.getElementById("profile-photo").src = profileData.photo;

// Skills
const skillsList = document.getElementById("skills-list");
profileData.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Experience
const experienceList = document.getElementById("experience-list");
profileData.experience.forEach(exp => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${exp.role}</strong> at ${exp.company} (${exp.period})<br/>` +
    exp.duties.map(d => `- ${d}`).join("<br/>");
  experienceList.appendChild(li);
});

// Education
const eduList = document.getElementById("education-list");
profileData.education.forEach(edu => {
  const li = document.createElement("li");
  li.textContent = edu;
  eduList.appendChild(li);
});

// Projects
const projList = document.getElementById("projects-list");
profileData.projects.forEach(proj => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${proj.name}</strong>: ${proj.description}`;
  projList.appendChild(li);
});

// Contact
document.getElementById("email").textContent = "Email: " + profileData.contact.email;
document.getElementById("phone").textContent = "Phone: " + profileData.contact.phone;
document.getElementById("linkedin").innerHTML = `LinkedIn: <a href="${profileData.contact.linkedin}" target="_blank">${profileData.contact.linkedin}</a>`;
