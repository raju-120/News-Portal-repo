

              //Category Modal
/* 
const loadNewsCategory = async category_id =>{

    const url =  `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNewsModal(data.data)
}


const displayCategoryNewsModal = id =>{
    console.log(id);
    const modalcategoryTitle = document.getElementById('newsModalLabel');
    modalcategoryTitle.innerText = id.title;
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
    <p>${id.author.name}</p>
    <p>${id.details}</p>
    `;
}
 
 */
/* Category Id Work Finished */



/* News Id Work Finished */

const loadNewsCard = async () => {
    const url=`https://openapi.programming-hero.com/api/news/category/08`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCard(data.data); 
}

const displayNewsCard = newsCards =>{

    console.log(newsCards);

    const newsCardContent =  document.getElementById('news-card-content');
    newsCards.forEach(newsCard => {
       
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.classList.add('mb-3');
        newsDiv.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
           <img src="${newsCard.image_url}" style= "margin: 5px; padding: 10px" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${newsCard.title}</h5>

            <p class="card-text" style= "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 1600px; max-height: 1600px;"><small class="text-muted" >${newsCard.details}<small></p>
            
            <div class= "d-flex justify-content-between">
                <div class = "d-flex">
                   
                   <image src="${newsCard.author.img}" style="width: 50px; height: 50px; border-radius: 25px; margin-right: 5px;">
                   <span>
                       <p>${newsCard.author.name  ? newsCard.author.name  : 'No Name Found'}</p>
                       <p>${newsCard.author.published_date ? newsCard.author.published_date: 'No Published Date Found'}</p>
                   </span>
                </div>
                <p class="card-text"><small  class="text-muted"><i class="fa-solid fa-eye"> ${newsCard.total_view ? newsCard.total_view: 'No View Found'}</i></small></p>
                <p class="card-text"><small class="text-muted"><i class="fa-solid fa-star"> ${newsCard.rating.number} </i> </small></p>


                
                <button onclick="loadNewsAllDetails('${newsCard.category_id}')" class= "m-3 p-2 btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Details <i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                
                </div>

        </div>
        </div>
    </div>
    `;
        newsCardContent.appendChild(newsDiv);
    });
}

/* 
const loadNewsAllDetails = async news_id =>{
    const url =`https://openapi.programming-hero.com/api/news/${news_id}`;
    const res =await fetch(url);
    const data = await res.json();
    displayNewsAllDetails(data.data);
}
const displayNewsAllDetails = newsAll =>{
    console.log(newsAll);
    const modalTitle = document.getElementById('newsModalLabel');
    modalTitle.innerText = newsAll.name;
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
    <p>${newsAll.author.name}</p>
    <p>${newsAll.details}</p>
    `;

} */

 