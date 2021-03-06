import Vuex from 'vuex';

import { createLocalVue } from '@vue/test-utils';
import { inject, createStore } from 'vuex-smart-module';

import MainActions from './MainActions';

import MainStore from './MainStore';

const commit = jest.fn();
const dispatch = jest.fn();

describe('Translations store', () => {
    beforeEach(() => {
        dispatch.mockClear();
        commit.mockClear();
    });
    it('Change to English', async () => {
        const localVue = createLocalVue();

        localVue.use(Vuex);

        const actions = inject(MainActions, {
            commit,
        });
        const store = createStore(MainStore);

        store.dispatch('changeLanguajeToEnglish');

        await actions.changeLanguajeToEnglish();

        expect(commit).toHaveBeenCalledWith('changeLanguajeToEnglish');

        expect(store.state.currentLanguage).toBe('en');
    });

    it('Change to Espanish', async () => {
        const localVue = createLocalVue();

        localVue.use(Vuex);

        const actions = inject(MainActions, {
            commit,
        });
        const store = createStore(MainStore);

        store.dispatch('changeLanguajeToEnglish');
        store.dispatch('changeLanguajeToSpanish');

        await actions.changeLanguajeToSpanish();

        expect(commit).toHaveBeenCalledWith('changeLanguajeToSpanish');

        expect(store.state.currentLanguage).toBe('es');
    });
});
