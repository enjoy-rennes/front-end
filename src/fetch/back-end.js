export const DOMAIN = 'http://127.0.0.1:8000/';

export function getHelpFetch() {
    const REQUEST = DOMAIN + 'help_list';
    return fetch(REQUEST, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch(err => console.error(err));


    // return fetch('help_list');
}

export function getCategoryFetch() {
    return fetch('category_list');
}

export function getSocietyFetch() {
    return fetch('society_list');
}

export function getPlaceFetch() {
    return fetch('place_list');
}

export function getAddressFetch() {
    return fetch('address_list');
}

export function getRequirementFetch() {
    return fetch('requirement_list');
}

export function getNewsFetch() {
    return fetch('news_list');
}

export function getCardFetch() {
    return fetch('card_list');
}

export function getGoodPlanFetch() {
    return fetch('good_plan_list');
}