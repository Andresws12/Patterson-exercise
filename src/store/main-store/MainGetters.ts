import { Getters } from 'vuex-smart-module';
import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
    public get query(): string {
        return `${this.getters.limitQuery}`;
    }

    public get limitQuery(): string {
        return this.state.productsLimit
            ? `?limit=${this.state.productsLimit}`
            : '';
    }

    public get totalProductsCar(): number {
        return this.state.car.length;
    }

    public get totalPriceCar(): number {
        let totalPrice: number = 0;

        this.state.car.forEach(product => {
            totalPrice = totalPrice + product.price;
        });

        this.state.discount > 0
            ? (totalPrice =
                  totalPrice - (totalPrice * this.state.discount) / 100)
            : null;

        return Math.round(totalPrice * 100) / 100;
    }
}
