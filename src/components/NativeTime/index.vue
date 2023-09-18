<template>
  <div class="nav-time">2023年5月26日 周五 农历四月初八</div>
</template>

<script>
export default {
  name: "NativeTime",
  props: {
      title: {
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped>

.nav-time{
  position: absolute;
  top: 12px;
  right: 40px;
  height: 18px;
  font-size: 14px;
  font-family: OPPOSans;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0px 0px 10px #0AA5D5, 0px 6px 8px rgba(0, 57, 123, 0.8);
}
</style>