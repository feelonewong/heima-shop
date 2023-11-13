<script setup lang="ts">
import { http } from '@/utils/http'
const getData = () => {
  http({
    method: 'GET',
    url: '/home/banner',
  }).then((res) => {
    console.log(res, 'res')
  })
}
</script>

<template>
  <button hover-class="button-hover" @click="getData">获取用户信息</button>
  <uni-card>
    <text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
  </uni-card>
</template>

<style lang="scss">
//
</style>
