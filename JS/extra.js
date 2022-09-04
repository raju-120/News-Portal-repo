const categoryesName = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayName(data.data.news_category)
}
const displayName = Names => {
    const NameBar = document.getElementById('NameContainer');
    Names.forEach(Name => {
        const NameDiv = document.createElement('div');
        NameDiv.classList.add('name');
        NameDiv.innerHTML = `
            <li>${Name.news_category}</li>
        `;
        NameBar.appendChild(NameDiv);
    });
}

categoryesName();