<template>
  <div class="tag-cloud" ref="cloudContainer">
    <div class="tag" v-for="tag in tags" :key="tag.id" :style="{
      fontSize: `${tag.fontSize}px`,
      color: tag.color,
      fontWeight: tag.fontWeight,
      left: `${tag.position.x}px`,
      top: `${tag.position.y}px`
    }" @click="handleTagClick(tag)">
      {{ tag.name }}
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface Tag {
  id: number;
  name: string;
  fontSize: number;
  color: string;
  fontWeight: number;
  position: { x: number; y: number };
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Items1',
  setup() {
    const cloudContainer = ref<HTMLElement | null>(null);
    const tags = ref<Tag[]>([]);

    const handleTagClick = (tag: Tag) => {
      console.log('Clicked tag:', tag);
      // 在这里添加单击事件逻辑
    };

    const getRandomPosition = (tagSize: number, containerWidth: number, containerHeight: number) => {
      const maxAttempts = 100;
      let attempt = 0;

      while (attempt < maxAttempts) {
        const positionX = Math.floor(Math.random() * (containerWidth - tagSize));
        const positionY = Math.floor(Math.random() * (containerHeight - tagSize));

        if (!checkOverlap(positionX, positionY, tagSize)) {
          return { x: positionX, y: positionY };
        }

        attempt++;
      }

      // 如果达到最大尝试数，但没有找到合适的位置，则退回到中心位置
      const positionX = Math.floor((containerWidth - tagSize) / 2);
      const positionY = Math.floor((containerHeight - tagSize) / 2);
      return { x: positionX, y: positionY };
    };

    const checkOverlap = (x: number, y: number, tagSize: number) => {
      const threshold = 10;

      for (const tag of tags.value) {
        if (
          x + tagSize + threshold >= tag.position.x &&
          x - threshold <= tag.position.x + tag.fontSize &&
          y + tagSize + threshold >= tag.position.y &&
          y - threshold <= tag.position.y + tag.fontSize
        ) {
          return true; // 重叠的检测
        }
      }

      return false; //不重叠的
    };

    onMounted(() => {
      if (cloudContainer.value) {
        const containerWidth = cloudContainer.value.offsetWidth;
        const containerHeight = cloudContainer.value.offsetHeight;
        const tagSizeRange = { min: 10, max: 30 };

        for (let i = 0; i < 30; i++) {
          const randomSize = Math.floor(Math.random() * (tagSizeRange.max - tagSizeRange.min + 1)) + tagSizeRange.min;
          const randomColorIndex = Math.floor(Math.random() * 4);
          const randomPosition = getRandomPosition(randomSize, containerWidth, containerHeight);

          tags.value.push({
            id: i + 1,
            name: `刘德华 ${i + 1}`,
            fontSize: randomSize,
            color: ['#00D4FF', '#0082E8', '#DDDDDD', '#CAF0FC'][randomColorIndex],
            fontWeight: Math.random() < 0.5 ? 400 : 700,
            position: randomPosition
          });
        }
      }
    });

    return {
      cloudContainer,
      tags,
      handleTagClick
    };
  }
});
</script>

<style scoped lang="scss">
@import './index.scss';

</style>
