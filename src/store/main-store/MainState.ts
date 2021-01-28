import { Products } from '@/models/Products';

export default class MainState {
    public productsLimit: number | null = null;
    public products: Products[] = [];
    public car: Products[] = [];
    public discount: number = 0;
    public isLoading: boolean = false;
    public currentLanguage: string = 'en';
}
