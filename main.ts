
const form = document.getElementById('form') as HTMLFormElement;
const displayElement = document.getElementById('Resume-display') as HTMLDivElement

form.addEventListener(`submit`, (event: Event)=> {
    event.preventDefault(); //prevent page reload

    //collect input values
    
    const name = (document.getElementById('name')as HTMLInputElement).value
    const Email = (document.getElementById(`email`)as HTMLInputElement).value
    const phone = (document.getElementById(`phone`)as HTMLInputElement).value
    const Education = (document.getElementById(`Education`)as HTMLInputElement).value
    const Experience = (document.getElementById(`Experience`)as HTMLInputElement).value
    const Skills = (document.getElementById(`Skills`)as HTMLInputElement).value

    //generate resume
    const resumeHtml = `
    <h1>Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${Email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h2>Education:</h2>
    <p> ${Education}</p>

    <h2>Experience:</h2>
    <p> ${Experience}</p>

    <h2>Skills:</h2>
    <p> ${Skills}</p>

    `;

    //dispaly genratated resume
    if(displayElement) {
        displayElement.innerHTML = resumeHtml;}
    else{
        console.error('Your resume is not completed.');
    }

    })