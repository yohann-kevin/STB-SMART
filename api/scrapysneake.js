const url = "https://scrapysneake.herokuapp.com/";

export function getSneakerTrend() {
    let road = "trend";
    
    return fetch(url + road)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getSneakerByModel(model) {
    let road = "sneakers/find/";

    return fetch(url + road + model)
        .then((response) => response.json())
        .catch((err) => console.log(err))
}

export function getSneakerCount() {
    let road = "sneakers/count/all";

    return fetch(url + road)
        .then((response) => response.json())
        .catch((err) => console.log(err))
}

export function getSneakerAdvert() {
    let road = "advert";

    return fetch(url + road)
        .then((response) => response.json())
        .catch((err) => console.log(err))
}