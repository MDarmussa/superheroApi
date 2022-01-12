const container = document.getElementById('container');
let search = [];
document.addEventListener('DOMContentLoaded', function(){
     fetch(`https://www.omdbapi.com/?s=batman&apikey=52d1568a`)
     .then(response => response.json())
     .then(data => {
          let uL = document.createElement('ul');
          container.appendChild(uL);
          // console.log(data)
          search = data.Search;
          let {Search} = data; // 2d way
          // console.log(Search)
          let list = Search.map(movie => {
               let tempList = `<li>
               <img src="${movie.Poster}">
               <a id="link" href="">${movie.Title}</a>
               </li>`

               uL.innerHTML += tempList;       
          })
          let link = document.getElementById('link');
          link.addEventListener("click", function(e) {
          e.preventDefault();//for click
          fetch(`https://www.omdbapi.com/?s=batman&apikey=52d1568a`)
               .then(response => response.json())
               .then(data => {
                    
               })


})

})
})
console.log(search)





               // let aList = document.createElement('li');
               // let Image = document.createElement('img');
               // let link = document.createElement('a');
  // link.innerHTML = movie.Title;
               // Image.src = movie.Poster;
               // aList.appendChild(Image)
               // aList.innerHTML = link
               // uL.appendChild(aList)