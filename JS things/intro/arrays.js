const baseAPIurl = 'https://api.thecatapi.com/v1/images/search?limit=2';
const favouritesAPIurl = 'https://api.thecatapi.com/v1/favourites';



const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_01p5qK5ufcWYRunE3yMPLFOSauwinWRwSEG6G6DmuOm8omHMe793CvROsrB0oA1c"
  });
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  
const fetchRandomMichis = async (url, requestOptions) =>{
    const respuesta = await fetch(url,requestOptions);
    // console.log(respuesta);
    if(respuesta.status != 200){
        console.log(`algo fallo we ${respuesta.status} `);
    }else{
        console.log("Ahoy ya pice a garbage! :D");

    }
    const data = await respuesta.json();
    console.log(data);
    renderRandomMichis(data);
    
}
const fetchfavouritesMichis = async (url, requestOptions) =>{
    const respuesta = await fetch(url,requestOptions);
    // console.log(respuesta);
    if(respuesta.status != 200){
        console.log(`algo fallo we ${respuesta.status} `);
    }else{
        console.log("Ahoy ya pice a garbage! :D");

    }
    const data = await respuesta.json();
    console.log(data);
    renderFavouritesMichis(data);
    
}

const renderRandomMichis= (michisArr)=>{
    const toRender=[];
    const main_container = document.querySelector(".main__content");

    michisArr.forEach(element => {
        const article = document.createElement("article");
        article.classList.add("main__card");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const btnText = document.createTextNode("Agregar michi a favoritos");
        button.addEventListener("click", () => {
            addMichiToFavourite(element.id);
            console.log(`michi ${element.id} added`);
        });

        button.append(btnText);
        img.src=element.url;
        article.append(img,button);

        toRender.push(article);
    });

    main_container.append(... toRender);

}

const addMichiToFavourite = async (michiID)=>{
    const response = await fetch(favouritesAPIurl,{
        method:"POST",
        headers:headers,
        body:JSON.stringify({
            "image_id": michiID
        })
    });
}


const renderFavouritesMichis= (michisArr)=>{
    const toRender=[];
    const main_container = document.querySelector(".main__favourites");

    michisArr.forEach(element => {
        const article = document.createElement("article");
        article.classList.add("main__card");
        const img = document.createElement("img");
        const button = document.createElement("button");
        const btnText = document.createTextNode("Agregar michi a favoritos");
        button.addEventListener("click", () => {
            addMichiToFavourite(element.id);
            console.log(`michi ${element.id} added`);
        });

        button.append(btnText);
        img.src=element.image.url;
        article.append(img,button);

        toRender.push(article);
    });

    main_container.append(... toRender);

}

fetchRandomMichis(baseAPIurl,requestOptions);
fetchfavouritesMichis(favouritesAPIurl,requestOptions);