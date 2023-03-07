let cardEl = document.getElementById("card");

const myTvShowUrl = "https://api.tvmaze.com/shows/5/episodes";
async function getISS() {
    const response = await fetch(myTvShowUrl);
    const data = await response.json();

    for(let i=0; i<data.length ; i++){
       // let {data.name} = data;
       let card = document.createElement("div");
       card.className = "card";

       let a = document.createElement("a");
       a.href = data[i].url;
       card.appendChild(a);
       
       let title = document.createElement("h4");
       title.className = "card-title";
       title.innerHTML = data[i].name;
       card.appendChild(title);

       let image = document.createElement("img");
       image.className = "card-image";
       image.src = data[i].image["medium"];
       card.appendChild(image);

       let summary = document.createElement("p");
       summary.className = "card-summary";
       summary.innerHTML = data[i].summary;
       let span = document.createElement("span");
       span.className = "span-class";
       span.appendChild(summary);
       card.appendChild(span);

       let seasonAndEpisode = document.createElement("h5");
       seasonAndEpisode.className= "card-season-and-episode";
       seasonAndEpisode.innerHTML = "S0" + data[i].season + "E0" + data[i].number;
       card.appendChild(seasonAndEpisode);

       cardEl.appendChild(card);

    }
   // console.log(data);
}
getISS();
// const displayMovies = async () => {
//     const payload = await getISS();

//     let movieDisplay = payload.map((object) => {
//         const {name, season} = object;
//     })
// }