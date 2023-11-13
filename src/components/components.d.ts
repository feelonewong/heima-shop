// import { GlobalComponents } from './../types/component.d';
import XtxSwiper from './XtxSwiper.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
