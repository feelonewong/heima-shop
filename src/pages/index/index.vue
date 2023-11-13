<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/services/home'
const bannerList = ref([])
const getHomeBannerData = () => {
  getHomeBannerAPI().then((res: any) => {
    if (res.code === '1') {
      bannerList.value = res.result
    }
  })
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <view>
    <CustomNavbar></CustomNavbar>
    <XtxSwiper :list="bannerList"></XtxSwiper>
  </view>
</template>

<style lang="scss">
//
</style>
