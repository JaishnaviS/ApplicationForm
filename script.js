document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const experience = parseInt(event.target.experience.value, 10);
    const skills = event.target.skills.value.split(',').map(skill => skill.trim().toLowerCase());

    const jobRequirements = {
        minExperience: 3,
        requiredSkills: ['javascript', 'react', 'node.js']
    };

    console.log("Applicant's skills:", skills);
    console.log("Required skills:", jobRequirements.requiredSkills);

    const meetsExperience = experience >= jobRequirements.minExperience;
    const meetsSkills = jobRequirements.requiredSkills.every(skill => skills.includes(skill));

    console.log("Meets experience requirement:", meetsExperience);
    console.log("Meets skills requirement:", meetsSkills);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (meetsExperience && meetsSkills) {
        resultDiv.innerHTML = `<p>Application accepted for ${name} (${email}).</p>`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.innerHTML = `<p>Application rejected for ${name} (${email}).</p>`;
        resultDiv.style.color = 'red';
    }
});
