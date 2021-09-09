
fetch("https://api.github.com/orgs/Devs-Clan/public_members")
.then((result)=> result.json())
.then((data) => {

    for (let i = 0; i < data.length; i++) {   
    document.getElementById("members").innerHTML += `<a target="_blank" href="${data[i].html_url}" ><img style="width: 50px; height: 50px; margin: 10px;" src="${data[i].avatar_url}"/></a>`
    }
})