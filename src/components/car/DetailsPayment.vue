<template>
    <details-layout class="details-car">
        <template v-slot:header>
            <div class="details-car__header columns">
                <div class="details-car__total-products column">
                    {{ totalProducts }}
                    <span v-if="totalProducts > 1 || totalProducts === 0">
                        Articulos</span
                    >
                    <span v-else>Articulo</span>
                </div>
                <div class="details-car__total-price column is-4">
                    {{ totalPrice }}€
                </div>
            </div>
        </template>
        <template>
            <div class="details-car__content-button">
                <b-button expanded class="details-car__button">
                    FINALIZAR COMPRA
                </b-button>
            </div>
        </template>
    </details-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import DetailsLayout from '@/components/car/DetailsLayout.vue';

@Component({
    name: 'DetailsPayment',
    components: {
        DetailsLayout,
    },
})
export default class DetailsPayment extends Vue {
    @Prop(Number) private totalPrice: number;
    @Prop(Number) private totalProducts: number;
}
</script>

<style lang="scss" scoped>
.details-car {
    &__total-price {
        text-align: right;
        font-weight: 600;
        padding-left: 5px;
    }
    &__button {
        background-color: #7b7b7b;
        color: #fff;
        border-radius: 0px;
        font-weight: 600;
        &:hover,
        &:focus,
        &:active {
            color: #fff;
        }
    }
}
</style>
