import { data } from "../data/data.js";
const video = document.getElementById('video');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const templateDetail = document.getElementById('template-detail').content;


/* el DOMContentLoaded es un evento que garantiza que cargue el documento y luego llama la función que se le dio*/
document.addEventListener('DOMContentLoaded', () => {
    cargarData(data);
})

const cargarData = (data) => {
    console.log(data);
    data.forEach(kdrama => { //Kdrama es un objeto que tiene propiedades 
        //desestructuración de objetos: permite separar cada porpiedad y tratarlas de forma independiente//   
        const { dorama, image } = kdrama;

        templateCard.querySelector('h5').textContent = dorama;
        templateCard.querySelector('img').setAttribute('src', image);

        const clone = templateCard.cloneNode(true);

        clone.firstElementChild.addEventListener('click', () => {
            //console.log(dorama);
            video.innerHTML = ''
            templateDetail.querySelector('h2').textContent = dorama;
            templateDetail.querySelector('#image-des').setAttribute('src', image);
            templateDetail.querySelector('#created').innerHTML = kdrama.createdBy;
            templateDetail.querySelector('#description').innerHTML = kdrama.description;
            templateDetail.querySelector('#emition').innerHTML = kdrama.emition;

            window.scrollTo(0,0);

            const clone = templateDetail.cloneNode(true);
            video.appendChild(clone);



        });

        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}