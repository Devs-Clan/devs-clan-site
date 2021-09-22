fetch("https://api.github.com/orgs/Devs-Clan/public_members")
.then((result)=> result.json())
.then((data) => {

    for (let i = 0; i < data.length; i++) {   
    document.getElementById("members").innerHTML +=
    `
        <a alt="member icon" target="_blank" href="${data[i].html_url}" title="${data[i].login}">
             <img class="member-icon" src="${data[i].avatar_url}"/>
        </a>
    `
    }
})
