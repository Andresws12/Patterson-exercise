export const API_PREFIX = 'https://fakestoreapi.com';

export const apiPrefix = (url: string): any => API_PREFIX + url;

export const jsonHeaders = {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};
export const htmlHeaders = {
    headers: {
        Accept: 'text/html',
    },
};
