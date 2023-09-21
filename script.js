const studentTable = document.querySelector("tbody");

addEventListener("submit", (e) => {
    e.preventDefault();

    const Name = document.querySelector("input[name='name']");
    const Email = document.querySelector("input[name='email']");
    const Website = document.querySelector("input[name='website']");
    const Gender = document.querySelectorAll("input[name='gender']");
    const Skills = document.querySelectorAll("input[name='skills']");
    const Image = document.querySelector("input[name='image']");
    
    const td1 = document.createElement('td');

    const name = document.createElement('p');
    name.append(`${Name.value}`);

    const email = document.createElement('p');
    email.append(`${Email.value}`);

    const website = document.createElement('a');
    website.setAttribute("href",`${studentWebsite.value}`);
    website.setAttribute("target","_blank")
    website.append(`${Website.value}`);

    const gender = document.createElement('p');
    const skills = document.createElement('p');
    
    if (Gender[0].checked) {
        gender.append(`${Gender[0].value}`);
    } else {
        gender.append(`${Gender[1].value}`);
    }

    let skillAll = "";
    for (skill of Skills) {
        if (skill.checked) {
            if (skillAll === "") {
                skillAll += `${skill.value}`;
            } else {
                skillAll += ',' + `${skill.value}`;
            }
        }
    }
    skills.append(skillAll);
    
    td1.append(name);
    td1.append(gender);
    td1.append(email);
    td1.append(website);
    td1.append(skills)
    td1.setAttribute("class","td1")

    const td2 = document.createElement('td');

    const image = document.createElement('img');
    if(studentImage.value) {
        image.setAttribute("src",`${Image.value}`);
    } else {
        image.setAttribute("src",`default-face.jpg`);
    }
    
    
    td2.append(image);
    td2.setAttribute("class","td2")

    const tr = document.createElement("tr");
    tr.append(td1);
    tr.append(td2);

    studentTable.append(tr);
});