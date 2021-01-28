<template>
    <div class="discount-code columns is-multiline">
        <div class="column">Código de descuento</div>
        <div class="column is-6">
            <b-input v-model="code" expanded></b-input>
        </div>
        <div class="column">
            <b-button
                class="discount-code__button"
                type="is-dark"
                @click="applyCode"
            >
                APLICAR
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'DiscountCode',
})
export default class DiscountCode extends Vue {
    private code: string = '';

    private applyCode(): void {
        this.$emit('on-apply-code', this.code);
    }
}
</script>

<style lang="scss" scoped>
.discount-code {
    margin-top: 50px;
    &__button {
        border-radius: 0px;
    }
}
</style>
