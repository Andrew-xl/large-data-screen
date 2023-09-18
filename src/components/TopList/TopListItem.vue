<template>
  <div :class="styles.container">
    <div :class="styles.content">
      <div :class="styles.top">
        <div :class="styles.num">{{item.num ?? defaultValue.number}}</div>
        <div :class="styles.unit">{{item.unit}}</div>
      </div>
      <div :class="styles.dep">{{item.dep}}</div>
    </div>
  </div>
</template>
<script>
import styles from "./TopListItem.module.scss";
export default {
  name: "TopListItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    defaultValue: {
      type: Object,
      default: () => {
        return {
          number: 0,
        };
      },
    },
  },
  data() {
    return { styles };
  },
};
</script>

<style scoped></style>
