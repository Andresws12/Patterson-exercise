<template>
    <div class="navbar-right">
        <img
            src="../../assets/img/carrito.svg"
            alt="Carrito"
            class="navbar-right__car-icon"
        />
        <div class="navbar-right__car-total">{{ totalProducts }}</div>
        <div class="navbar-right__car-text">
            <p class="navbar-right__car-price">{{ totalPrice }}€</p>
            <p class="navbar-right__car-link">
                <router-link to="/car" href="">Mi carrito</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'NavBarRight',
})
export default class NavBarRight extends Vue {
    @Prop(Number) private totalPrice: number;
    @Prop(Number) private totalProducts: number;
}
</script>

<style lang="scss" scoped>
.navbar-right {
    align-self: center;
    display: inline-flex;
    &__car-icon {
        width: 35px;
        margin-right: 10px;
    }
    &__car-price {
        font-size: 12px;
        color: #8a8a8a;
    }
    &__car-total {
        background-color: black;
        position: absolute;
        color: white;
        font-size: 12px;
        border-radius: 50px;
        width: 16px;
        padding-left: 4px;
    }
}
</style>
