<template>
    <b-carousel-list
        class="carousel-products"
        :data="products"
        :items-to-show="4"
        :arrow-hover="false"
        :repeat="true"
    >
        <template #item="product">
            <div class="carousel-products__card">
                <div class="carousel-products__card-image-content">
                    <img
                        class="carousel-products__card-image"
                        :src="product.image"
                    />
                    <div class="carousel-products__options">
                        <img
                            class="carousel-products__option"
                            src="../../assets/img/carrito.svg"
                            @click="addProductToCar(product)"
                        />
                        <img
                            class="carousel-products__option"
                            src="../../assets/img/ojo.svg"
                        />
                    </div>
                </div>
                <div class="carousel-products__card-stars-content">
                    <img
                        class="carousel-products__card-stars"
                        src="../../assets/img/estrella.svg"
                        v-for="star in 5"
                        :key="star"
                    />
                </div>
                <div class="carousel-products__content">
                    <p class="carousel-products__content-name">
                        {{ product.title }}
                    </p>
                    <p class="carousel-products__content-price">
                        {{ product.price }} €
                    </p>
                </div>
            </div>
        </template>
    </b-carousel-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Products } from '@/models/Products';

@Component({
    name: 'CarouselProducts',
})
export default class CarouselProducts extends Vue {
    @Prop(Array) private products: Products;

    private addProductToCar(product: Products): void {
        this.$emit('on-add-product-to-car', product);
    }
}
</script>

<style lang="scss" scoped>
.carousel-products {
    box-shadow: unset !important;
    /deep/.carousel-arrow {
        .icon {
            background: #000;
            color: #fff;
            cursor: pointer;
            border: unset;
            border-radius: unset;
            outline: 0;
            &:hover {
                border: unset !important;
            }
        }
    }
    /deep/.carousel-slide {
        padding: 15px;
    }
    &__card {
        border: 0px;
        border-radius: 0px;
        box-shadow: unset;
        background-color: transparent;
    }
    &__card-image {
        border: 0px;
        border-radius: 0px;
        box-shadow: unset;
        background-color: #fff;
        width: 175px;
    }
    &__card-stars {
        width: 25px;
    }
    &__card-stars-content {
        background-color: #fff;
        padding: 10px;
    }
    &__card-image-content {
        border: 0px;
        border-radius: 0px;
        box-shadow: unset;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 70px;
        min-height: 450px;
        @include touch {
            padding: 20px;
            min-height: 250px;
        }
        &:hover {
            .carousel-products__options {
                display: block !important;
            }
        }
    }
    &__content {
        margin-top: 25px;
    }
    &__content-price {
        margin-top: 25px;
        font-weight: 600;
    }
    &__options {
        position: absolute;
        width: 100px;
        display: none;
    }
    &__option {
        width: 40px;
        background-color: #efefef;
        padding: 9px;
        border-radius: 4px;
        margin: 3px;
        cursor: pointer;
    }
}
</style>
