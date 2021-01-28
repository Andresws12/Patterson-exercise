import { Actions } from 'vuex-smart-module';

import { getProducts } from '@/webservices/ProductsWebservice';

import { Products } from '@/models/Products';

import MainState from './MainState';
import MainGetters from './MainGetters';
import MainMutations from './MainMutations';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    public async getProducts(): Promise<void> {
        try {
            this.commit('startLoading', null);
            const products: Products[] = await getProducts(this.getters.query);
            this.commit('setProducts', products);
        } finally {
            this.commit('stopLoading', null);
        }
    }

    public async setDiscount(code: string): Promise<void> {
        switch (code) {
            case 'DTO10': {
                this.commit('setDiscount', 10);
                break;
            }
            case 'DTO50': {
                this.commit('setDiscount', 50);
                break;
            }
        }
    }

    public async addProductToCar(product: Products): Promise<void> {
        this.commit('addProductToCar', product);
    }

    public async removeProductFromCar(product: Products): Promise<void> {
        this.commit('removeProductFromCar', product);
    }

    // Translate Actions
    public changeLanguajeToSpanish(): void {
        this.commit('changeLanguajeToSpanish');
    }

    public changeLanguajeToEnglish(): void {
        this.commit('changeLanguajeToEnglish');
    }
}
