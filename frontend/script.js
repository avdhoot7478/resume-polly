const API_URL =
"https://4hts6abob0.execute-api.ap-south-1.amazonaws.com/upload";

async function processResume(){

    try{

        const response = await fetch(API_URL,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:"Avdhoot"
            })
        });

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>Success</h3>
            <p>${data.message}</p>
        `;

    }
    catch(error){

        console.error(error);

        document.getElementById("result").innerHTML =
        "<p>API Error</p>";
    }
}