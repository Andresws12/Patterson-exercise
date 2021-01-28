<template>
    <details-layout class="details-car">
        <template v-slot:header>
            <div class="details-car__title">CARRITO</div>
        </template>
        <template>
            <div
                class="columns details-car__product is-2"
                v-for="product in carProducts"
                :key="product.id"
            >
                <div class="column">
                    <img
                        class="details-car__product-image"
                        :src="product.image"
                        alt="product image"
                    />
                </div>
                <div class="column">{{ product.title }}</div>
                <div class="column details-car__product-price">
                    {{ product.price }}€
                </div>
                <div class="column details-car__remove-icon">
                    <b-icon
                        pack="fas"
                        icon="trash"
                        size="is-small"
                        @click.native="removeProduct(product)"
                    />
                </div>
            </div>
        </template>
    </details-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Products } from '@/models/Products';

import DetailsLayout from '@/components/car/DetailsLayout.vue';

@Component({
    name: 'DetailsCar',
    components: {
        DetailsLayout,
    },
})
export default class DetailsCar extends Vue {
    @Prop(Array) private carProducts: Products[];

    private removeProduct(product: Products): void {
        this.$emit('on-remove-product', product);
    }
}
</script>

<style lang="scss" scoped>
.details-car {
    &__title {
        font-size: 25px;
        font-weight: 600;
        line-height: 1.125;
    }
    &__product {
        font-weight: 600;
    }
    &__product-image {
        width: 100px;
    }
    &__product-price {
        text-align: right;
    }
    &__remove-icon {
        text-align: right;
        color: #ccc;
        .icon {
            cursor: pointer;
        }
    }
}
</style>
