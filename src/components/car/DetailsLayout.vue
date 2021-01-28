<template>
    <div class="details-layout">
        <div class="details-layout__title"><slot name="header" /></div>
        <div class="details-layout__content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'DetailsLayout',
})
export default class DetailsLayout extends Vue {}
</script>

<style lang="scss" scoped>
.details-layout {
    border: solid 1px #d6d5d580;
    -webkit-box-shadow: 5px 5px 3px -2px rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 3px -2px rgba(0, 0, 0, 0.05);
    border-top: solid 3px #d2d2d2c4;
    &__title {
        border-bottom: solid 1px #d6d5d580;
        padding: 15px;
    }
    &__content {
        padding: 25px;
    }
}
</style>
