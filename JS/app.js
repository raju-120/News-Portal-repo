
/* Category Id Work Start */
const loadCategoryNews = async () => {
    const url =  `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNews(data.data.news_category);
}
const displayCategoryNews = dailyNews =>{
    
    //console.log(dailyNews);

    const newsContainer = document.getElementById('news-container');
    dailyNews.forEach(news => {
        const newsUl = document.createElement('nav');
        newsUl.classList.add("nav");
        newsUl.classList.add("nav-pills");
        newsUl.classList.add("nav-fill");
        
        newsUl.innerHTML = `
        
        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#newsModal" href="#" onclick="loadNewsCategory('${news.category_id}')">${news.category_name}</a>
        `;
        newsContainer.appendChild(newsUl);
    
    });
};
const loadNewsCategory = async category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategory(data.data[0]);
}

const displayNewsCategory = ids => {
    //console.log(ids);

    const modalNewsCategory = document.getElementById('newsModalLabel');
    modalNewsCategory.innerText = ids.title;
    const categoryNewsDetails = document.getElementById('news-details');
    categoryNewsDetails.innerHTML = `
    <p>${ids.details}</p>
    <p><i class="fa-solid fa-eye">${ids.total_view}</i></p>
    `;
    
}


/* News Id Work Finished */

const loadNewsCard = async () => {
    const url=`https://openapi.programming-hero.com/api/news/category/08`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCard(data.data); 
}

const displayNewsCard = newsCards =>{

    //console.log(newsCards);

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

const loadNewsAllDetails = async news_id =>{
    const url =`https://openapi.programming-hero.com/api/news/${news_id}`;
    const res =await fetch(url);
    const data = await res.json();
    console.log(data.data[0]);
}


loadCategoryNews();
loadNewsCategory();
loadNewsCard();
/*loadNewsAllDetails(); */