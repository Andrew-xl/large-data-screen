<template>
  <div class="nav">
      <div class="nav-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "Native",
  props: {
      title: {
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped>

.nav{
position: absolute;
top: 13px;
width: 100%;
height: 62px;
display: flex;
align-items: center;
justify-content: center;
}
.nav-title {
/* font-style:italic;s */
font-size: 48px;
height: 62px;
line-height: 62px;
font-family: 优设标题黑;
font-weight: 400;
color: #FFFFFF;
letter-spacing: 2px;
/* text-shadow: 0px 0px 10px #0AA5D5, 0px 6px 8px rgba(0, 57, 123, 0.8); */
}
</style>