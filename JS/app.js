const loadNews = async () => {
    const url =  `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category);
}/* 
<a class="nav-link"  href="#">Home</a> */
const displayNews = dailyNews =>{
    
    const newsContainer = document.getElementById('news-container');
    dailyNews.forEach(news => {
        const newsUl = document.createElement('nav');
        newsUl.classList.add("nav");
        newsUl.classList.add("nav-pills");
        newsUl.classList.add("nav-fill");
        
        newsUl.innerHTML = `
        
        <a class="nav-link"  href="#">${news.category_name}</a>
        `;
        newsContainer.appendChild(newsUl);
    
    });
};

const loadNewsCard = async () => {
    const url =  `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCard(data.data); 
}

const displayNewsCard = newsCards =>{
    console.log(newsCards);
    const newsCardContent =  document.getElementById('news-card-content');
    newsCards.forEach(newsCard => {
       /*  <div class="card mb-3" style="max-width: 1600px;"></div>
       <image  src="${}">
       */
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card');
        newsDiv.classList.add('mb-3');
        newsDiv.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
           <img src="${newsCard.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${newsCard.title}</h5>
            <p class="card-text"><small class="text-muted">${newsCard.details}<small></p>
            
            <div class= "d-flex justify-content-between">
                <div>
                   <image src="">
                   <p>${newsCard.author.name}</p>
                   <p>${newsCard.author.published_date}</p>
                </div>
                <p class="card-text"><small  class="text-muted"><i class="fa-solid fa-eye"> ${newsCard.total_view}</i></small></p>
                <p class="card-text"><small class="text-muted"><i class="fa-regular fa-star">${newsCard.rating.number} </i> </small></p>
            </div>

        </div>
        </div>
    </div>
     `;
        newsCardContent.appendChild(newsDiv);
    });
}

loadNewsCard();
loadNews();