<template>
  <div class="container">
    <div class="item-content animation" :key="data.warnKey">
      <div class="cards" v-for="(item, index) in data.dataList" :key="index">
        <div class="cards-box">
          <div class="cards-box-title">
            <div class="img">
            </div>
            <div class="text">{{ item.name }}</div>
          </div>
          <div class="cards-box-db">
            <div>
              80,000 <span>万元</span>
            </div>
            <div>
              86 <span>个</span>
            </div>
            <div>
              890 <span>台</span>
            </div>
          </div>
          <div class="cards-box-dsl">
            <div>在合作GMV</div>
            <div>在合作客户数</div>
            <div>在租设备数</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, onBeforeUnmount } from 'vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Items2',
  setup() {
    const data = reactive({
      dataList: [
        {
          id: 1,
          name: '瞬时气温(℃)',
        },
      ] as any,
      warnKey: 0,
      warnId: null as any,
      timesKill: null as any,
      timesKill1: null as any,
      caseList: [] as any,
    })
    onBeforeUnmount(() => {
      clearInterval(data.timesKill);
      clearInterval(data.timesKill1);
    })
    onMounted(() => {
      setWarnDataList();
      setAddWarnData();
    });
    const getWarnData = () => {
      if (data.warnId != null) {
        data.caseList.push({
          id: new Date().getTime(),
          name: '刘德华联合' + new Date().getTime(),
        });
      } else {
        data.dataList.splice(5);
        data.warnId = data.dataList[0].id;
      }
    }
    const addWarnData = () => {
      setTimeout(() => {
        if (data.caseList.length > 0) {
          let newArr = data.caseList.splice(0, 1);
          data.dataList = newArr.concat(data.dataList);
          data.warnKey += 1;
        }
      }, 3000);
    }

    const setWarnDataList = () => {
      data.timesKill = setInterval(getWarnData, 3000);
    }
    const setAddWarnData = () => {
      data.timesKill1 = setInterval(addWarnData, 3000);
    }
    return {
      data,
      getWarnData,
      addWarnData,
      setWarnDataList,
      setAddWarnData,
    };
  }
});
</script>



<style lang="scss" scoped>
@import './index.scss';
</style>

