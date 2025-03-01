<template>
    <div id="app">
        <nav-bar />
        <router-view />
        <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
        <github-button />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import Axios from 'axios';

import NavBar from '@/components/common/NavBar.vue';
import GithubButton from '@/components/GithubButton.vue';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'App',
    components: {
        NavBar,
        GithubButton,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    public async created(): Promise<void> {
        this.$i18n.locale = this.currentLanguage;
        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;

        this.mainStore.actions.getProducts();
    }

    @Watch('currentLanguage')
    private onChangeLanguage() {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="scss" scoped></style>
