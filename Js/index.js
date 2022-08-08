
function allGame(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2966266c4cmshfad2a97f7c3f239p1af096jsn38be3ded8541',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      }
    };
    
    fetch('https://steam2.p.rapidapi.com/search/Counter/page/2', options)
      .then(response=> response.json())
      .then(response => {
     console.log(response)
      for(let i=0;i<response.length;i++){
        let games=document.querySelector('#games');
    

    
    games.innerHTML+=`<div class='col-md-4 card-items'>
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${response[i].imgUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><b>Name:</b>${response[i].title}</h5>
      <p class="card-text"><b>Released:</b>${response[i].released}</p>
      <p class="card-text"><b>Price:</b>${response[i].price}</p>
  
      
    </div>
  </div>
    </div>`
  
   
   
    
      }
            
        })
      .catch(err => console.error(err)); 
  }
  



  






 function fg(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2966266c4cmshfad2a97f7c3f239p1af096jsn38be3ded8541',
      'X-RapidAPI-Host': 'steam-store-data.p.rapidapi.com'
    }
  };
  
  fetch('https://steam-store-data.p.rapidapi.com/api/featured/', options)
    .then(response => response.json())
    .then(response => {
  
    
let obj=document.getElementById('FG');
      for(let i=0;i<9;i++){
       obj.innerHTML+=`<div class='col-md-4 card-items'>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${response['featured_win'][i].header_image}" alt="">
  <div class="card-body">

    <h5 class="card-title">${response['featured_win'][i].name}</h5>
    <p class="card-text">${response['featured_win'][i].final_price}$</p>
  

    
 </div>
</div>
</div>`
      }
  
    })
    .catch(err => console.error(err));
}
allGame();
fg();
