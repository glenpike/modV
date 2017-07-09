import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage';
import layers from './modules/layers';
import mediaStream from './modules/media-stream';
import meyda from './modules/meyda';
import midi from './modules/midi';
import modVModules from './modules/modv-modules';
import palettes from './modules/palettes';
import profiles from './modules/profiles';
import size from './modules/size';
import tempo from './modules/tempo';
import user from './modules/user';
import windows from './modules/windows';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
if(debug) {
  console.warn(`modV: Vuex is in STRICT mode as NODE_ENV is set to "${process.env.NODE_ENV}".\n
All commits are syncronously watched. Performance lag is due to this.`);
}

export default new Vuex.Store({
  plugins: [
    createPersist({
      namespace: 'modv',
      initialState: {},
      paths: ['user'],
      expires: 0 // Never expire
    })
  ],
  modules: {
    layers,
    mediaStream,
    meyda,
    midi,
    modVModules,
    palettes,
    profiles,
    size,
    tempo,
    user,
    windows
  },
  strict: debug
});