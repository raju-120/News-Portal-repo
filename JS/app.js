const loadNews = async () => {
    const url =  `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category);
}

const displayNews = dailyNews =>{
    console.log(dailyNews);
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
    
    })
};

loadNews();