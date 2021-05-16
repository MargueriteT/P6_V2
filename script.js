$(document).ready(function(){
    console.log('Ready')
    getAllContent();

});

// Collect all movies
function getAllContent(){
    getBestMovie();
    getAllMovies();
    getZombieMovies();
    getActionMovies();
    getRomanceMovies();
}

// Collect data about the best movie
function getBestMovie () {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score').then(async(responseData) => {
        const response = await responseData.json();
        var bestMovie = response.results[0].url;
        fetch(bestMovie).then(async(respData) => {
            const resp = await respData.json();
            let output = `
               <div class="best_film" >
                    <a> The best of the best </a>
                    <h1 > "${resp.title}" </h1>
                    <p > "${resp.long_description}"</p>
                    <button class="btn" >More info</button>
               </div>
               <div class="best_film_image">
                    <img src="${resp.image_url}">
               </div>
            `;
            $("#bestMovie").html(output);
        })
        })

}

// Collect data about best movies
function getAllMovies (){
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score').then(async(responseData) => {
        const response = await responseData.json();
        var fiveMovies = response.results;
          if (fiveMovies.length < 7){
             const pageTwo= "&page=2";
             fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score'+pageTwo).then(async(responseDataTwo) => {
             const responseTwo = await responseDataTwo.json();

             var oneOtherMovies = responseTwo.results[0];
             var secondOtherMovies = responseTwo.results[1];
             var sixMovies = fiveMovies.concat(oneOtherMovies);
             var allMovies = sixMovies.concat(secondOtherMovies);
             let output = "";
             $.each(allMovies, (index, movie) => {
                output += `

                        <li class="carousel-item" >
                            <h2 >"${movie.title}" </h2>
                            <img src="${movie.image_url}">
                        </li>

                `;
            });
            $("#allMovies").html(output);

   })}
})}

// Collect data about best zombie movies
function getZombieMovies (){
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&title_contains=zombie').then(async(responseData) => {
        const response = await responseData.json();
        var fiveMovies = response.results;
          if (fiveMovies.length < 7){
             const pageTwo= "&page=2";
             fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&title_contains=zombie'+pageTwo).then(async(responseDataTwo) => {
             const responseTwo = await responseDataTwo.json();

             var oneOtherMovies = responseTwo.results[0];
             var secondOtherMovies = responseTwo.results[1];
             var sixMovies = fiveMovies.concat(oneOtherMovies);
             var allMovies = sixMovies.concat(secondOtherMovies);
             let output = "";
             $.each(allMovies, (index, movie) => {
                output += `

                        <li class="carousel-item" >
                            <h2 >"${movie.title}" </h2>
                            <img src="${movie.image_url}">
                        </li>

                `;
            });
            $("#zombieMovies").html(output);

   })}
})}

// Collect data about best action movies
function getActionMovies (){
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=action').then(async(responseData) => {
        const response = await responseData.json();
        var fiveMovies = response.results;
          if (fiveMovies.length < 7){
             const pageTwo= "&page=2";
             fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=action'+pageTwo).then(async(responseDataTwo) => {
             const responseTwo = await responseDataTwo.json();

             var oneOtherMovies = responseTwo.results[0];
             var secondOtherMovies = responseTwo.results[1];
             var sixMovies = fiveMovies.concat(oneOtherMovies);
             var allMovies = sixMovies.concat(secondOtherMovies);
             let output = "";
             $.each(allMovies, (index, movie) => {
                output += `

                        <li class="carousel-item" >
                            <h2 >"${movie.title}" </h2>
                            <img src="${movie.image_url}">
                        </li>

                `;
            });
            $("#actionMovies").html(output);

   })}
})}

// Collect data about best romance movies
function getRomanceMovies (){
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=romance').then(async(responseData) => {
        const response = await responseData.json();
        var fiveMovies = response.results;
          if (fiveMovies.length < 7){
             const pageTwo= "&page=2";
             fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=romance'+pageTwo).then(async(responseDataTwo) => {
             const responseTwo = await responseDataTwo.json();

             var oneOtherMovies = responseTwo.results[0];
             var secondOtherMovies = responseTwo.results[1];
             var sixMovies = fiveMovies.concat(oneOtherMovies);
             var allMovies = sixMovies.concat(secondOtherMovies);
             let output = "";
             $.each(allMovies, (index, movie) => {
                output += `

                        <li class="carousel-item" >
                            <h2 >"${movie.title}" </h2>
                            <img src="${movie.image_url}">
                        </li>

                `;
            });
            $("#romanceMovies").html(output);

   })}
})}

