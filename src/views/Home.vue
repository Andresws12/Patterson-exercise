<template>
    <div class="home-overview" data-cy="home-overview">
        <div class="home-overview__header">
            <div class="home-overview__title">Productos Destacados</div>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <a href="#" class="is-disabled">Todos Los productos</a>
                    </li>
                    <li><a href="#">Cocina</a></li>
                    <li class="is-active">
                        <a href="#" aria-current="page">Productos Destacados</a>
                    </li>
                </ul>
            </nav>
        </div>
        <carousel-products
            :products="products"
            @on-add-product-to-car="addProductToCar"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import CarouselProducts from '@/components/products/CarouselProducts.vue';

import { Products } from '@/models/Products';

@Component({
    name: 'Home',
    components: {
        CarouselProducts,
    },
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get products(): Products[] {
        return this.mainStore.state.products;
    }

    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    private addProductToCar(product: Products): void {
        this.mainStore.actions.addProductToCar(product);
    }
}
</script>

<style lang="scss" scoped>
.home-overview {
    padding: 75px;
    &__header {
        display: flex;
        justify-content: space-between;
        padding: 25px;
    }
    &__title {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.125;
    }
}
</style>
