<template>
    <div class="car-overview columns">
        <div class="column is-7">
            <details-car
                :carProducts="carProducts"
                @on-remove-product="removeProduct"
            />
        </div>
        <div class="column is-5">
            <details-payment
                :totalPrice="totalPriceCar"
                :totalProducts="totalProductsCar"
            />
            <discount-code @on-apply-code="applyCode" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DetailsCar from '@/components/car/DetailsCar.vue';
import DiscountCode from '@/components/car/DiscountCode.vue';
import DetailsPayment from '@/components/car/DetailsPayment.vue';

import mainStore from '@/store/main-store/MainStore';

import { Products } from '@/models/Products';

@Component({
    name: 'Car',
    components: {
        DetailsCar,
        DiscountCode,
        DetailsPayment,
    },
})
export default class Car extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get carProducts(): Products[] {
        return this.mainStore.state.car;
    }

    private get totalPriceCar(): number {
        return this.mainStore.getters.totalPriceCar;
    }

    private get totalProductsCar(): number {
        return this.mainStore.getters.totalProductsCar;
    }

    private removeProduct(product: Products): void {
        this.mainStore.actions.removeProductFromCar(product);
    }

    private applyCode(code: string): void {
        this.mainStore.actions.setDiscount(code);
    }
}
</script>

<style lang="scss" scoped>
.car-overview {
    margin-top: 15px;
    background-color: #fff;
    padding: 20px 150px 20px 150px;

    @include touch {
        padding: 20px 50px 20px 50px;
    }
}
</style>
