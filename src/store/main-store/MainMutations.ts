import { Mutations } from 'vuex-smart-module';

import MainState from './MainState';

import { Products } from '@/models/Products';

export default class MainMutations extends Mutations<MainState> {
    public setProducts(products: Products[]): void {
        this.state.products = products;
    }

    public addProductToCar(prod: Products): void {
        this.state.car.find(product => product.id === prod.id)
            ? null
            : this.state.car.push(prod);
    }

    public removeProductFromCar(prod: Products): void {
        this.state.car.splice(
            this.state.car.findIndex(product => product.id === prod.id),
            1
        );
    }

    public setDiscount(discount: number): void {
        this.state.discount = discount;
    }

    // Languaje Mutations
    public changeLanguajeToSpanish(): void {
        this.state.currentLanguage = 'es';
    }

    public changeLanguajeToEnglish(): void {
        this.state.currentLanguage = 'en';
    }

    // Loading Mutations
    public startLoading(): void {
        this.state.isLoading = true;
    }

    public stopLoading(): void {
        this.state.isLoading = false;
    }
}
