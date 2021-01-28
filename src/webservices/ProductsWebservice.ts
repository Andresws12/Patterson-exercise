import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { ProductsResponse } from './models';

const baseUrl: string = apiPrefix('/products');

export const getProducts: (
    params: string
) => Promise<ProductsResponse[]> = async params => {
    const response = await axios.get<ProductsResponse[]>(
        `${baseUrl}${params}`,
        jsonHeaders
    );
    return response.data;
};
