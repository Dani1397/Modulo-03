import { data } from "./grupodata.js";

const catalogue = document.getElementById("catalogue").content;
const fragment = document.createDocumentFragment();
const items = document.getElementById("products");
const catalogueDetail = document.getElementById('catalogue-detail').content;

document.addEventListener("DOMContentLoaded", () => {
    uploadData(data);
});

const uploadData = (data) => {
    data.forEach((article) => {
        const { id, title, price, img, detalle } = article;
        catalogue.getElementById("productTitle").textContent = title;
        catalogue.getElementById("image").setAttribute("src", img);
        catalogue.getElementById("price").textContent = price;
        catalogue.getElementById("btn").dataset.id = id;
        
        const clone = catalogue.cloneNode(true);

        clone.firstElementChild.addEventListener('click', () => {

            coverImage.innerHTML = ''
            catalogueDetail.querySelector('h1').textContent = title;
            catalogueDetail.querySelector('img').setAttribute('src', img);
            catalogueDetail.querySelector('#detail').textContent = detalle;
            catalogueDetail.querySelector('#price').innerHTML = price;
            
            window.scrollTo(0,0);
            const clone = catalogueDetail.cloneNode(true);
            coverImage.appendChild(clone);
        });
        fragment.appendChild(clone);
        items.appendChild(fragment);
    

        items.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                let idDetail = e.target.dataset.id;
                let detailArticle = data.find(article => article.id == idDetail);
                localStorage.setItem('Detalle', JSON.stringify(detailArticle))
            }
        })
    })
}