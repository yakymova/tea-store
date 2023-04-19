import data from "../data/db.json";
import axios from 'axios';

let url = "https://my-json-server.typicode.com/yakymova/json-for-tea";

export const getProductsFromUrl = (count) => {
    return axios
        .get(url + '/products')
        .then(response => response.data.slice(count));
}

export const getProductsFromJson = (count) => {
    return JSON.parse(JSON.stringify(data.products.slice(0, count)))
    // return data.products.slice(0, count);
}

export const getSelectedProductFromJson = (id) => {
    return JSON.parse(JSON.stringify(data.products[id - 1]))
}

export const getCategoriesFromJson = () => {
    return JSON.parse(JSON.stringify(data.categories))
}

export const getReviewsFromJson = (id) => {
    return JSON.parse(JSON.stringify(data.reviews.filter(item => +item.productId === +id)[0].reviews))
}


export default getProductsFromJson;



// export const getProductsFromJson = (count) => {
//     return axios.get('/db.json')
//         .then(response => response.data.products.slice(0, count));
// }

// export const getSelectedProductFromJson = (id) => {
//     return axios.get('/db.json')
//         .then(response => response.data.products)
//         .then(products => products.filter(pr => +pr.id === +id))
//         .then(product => product[0])
// }

// export const getCategoriesFromJson = () => {
//     return axios.get('/db.json')
//         .then(response => response.data.categories);
// }

// export const getReviewsFromJson = (id) => {
//     return axios.get('/db.json')
//         .then(response => response.data.reviews)
//         .then(reviews => reviews.filter(item => +item.productId === +id))
//         .then(review => review[0].reviews)
// }


// export default getProductsFromJson;