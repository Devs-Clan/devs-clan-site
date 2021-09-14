fetch("https://api.github.com/orgs/Devs-Clan/repos")
.then((result)=> result.json())
.then((data) => {

    for (let i = 0; i < data.length; i++) {

        // var temp = "test";
        // fetch("https://api.github.com/repos/Devs-Clan/Welcome/contributors")
        // .then((result2)=> result2.json()).then((data2)=>{
        //     console.log(data2[0].login)
        //     temp = data2[0].login;
        // }).catch(function(){console.log("ouch")})
        

        document.getElementById("projects").innerHTML += 
        `
            <div class="card" style="width:100%;">
                <h2>${data[i].name}</h2>
                <h5>Created at : ${data[i].created_at}</h5>
                <h6>Main language ${data[i].language}</h6>
                <img src="./images/devs_clan_logo.jpg">
                <p>${data[i].description}</p>   
                <a href="${data[i].html_url}" target="_blank" style="width:100%;" class="btn"><span>SOURCE CODE</span></a>
            </div>
        `   
    }
})




