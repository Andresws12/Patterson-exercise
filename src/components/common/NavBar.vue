<template>
    <div class="nabvar">
        <img
            src="../../assets/img/patterson-agency-logo.png"
            alt="Patterson Agency Logo"
            @click="toHome"
            class="nabvar__logo"
        />

        <nav-bar-right
            :totalPrice="totalPriceCar"
            :totalProducts="totalProductsCar"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavBarRight from './NavBarRight.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'NavBar',
    components: {
        NavBarRight,
    },
})
export default class NavBar extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get totalProductsCar(): number {
        return this.mainStore.getters.totalProductsCar;
    }

    private get totalPriceCar(): number {
        return this.mainStore.getters.totalPriceCar;
    }

    private toHome(): void {
        this.$route.path === '/' ? null : this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped>
.nabvar {
    height: 125px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    padding: 25px 100px 25px 100px;
    &__logo {
        cursor: pointer;
    }
}
</style>
