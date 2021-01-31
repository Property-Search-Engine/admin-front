const BASE_DB_URL = 'https://admin.casame.heroku.com/v1';

export const userEndpoints = {
    user: BASE_DB_URL + '/user',
    login: BASE_DB_URL + '/user/login',
    logout: BASE_DB_URL + '/user/logout',
    register: BASE_DB_URL + '/user/register',
    stadistics: BASE_DB_URL + 'user/stadistics',
    editProfile: BASE_DB_URL + 'user/profile',
}

export const propertiesEndpoints = {
    properties:  BASE_DB_URL + '/properties',
    soldProperty: BASE_DB_URL + '/properties/:id/sold'
}