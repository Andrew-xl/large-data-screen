<template>
  <div class="business-container">
    <div class="chart" :id="'im8' + (props.map_index + 1)" ></div>
  </div>
</template>


<script lang="ts">
import * as echarts from "echarts";

import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items8",
  props: {
    map_index: {
      type: Number as PropType<any>,
      default: 0,
    }
  },
  setup(props: any) {
    /// 声明定义一下echart
    let echart = echarts as any;

    onMounted(() => {
      getEchartLeft1();
    });

    onUnmounted(() => {
      echart.dispose;
    });
    const nrwData = [
      { label: "JLG", proviceWater: "100.45", userWater: "55", nrwRate: 80.65 },
      { label: "临工", proviceWater: "80", userWater: "80", nrwRate: 70 },
      { label: "临工", proviceWater: "81.45", userWater: "67", nrwRate: 89 },
      { label: "徐工", proviceWater: "145.45", userWater: "140.45", nrwRate: 55 },
      { label: "徐工", proviceWater: "60.45", userWater: "45", nrwRate: 43.65 },
      { label: "徐工", proviceWater: "55", userWater: "50", nrwRate: 85.65 },
      { label: "星邦", proviceWater: "100.45", userWater: "55", nrwRate: 80.65 },
      { label: "三一", proviceWater: "80", userWater: "80", nrwRate: 70 },
      { label: "通冠", proviceWater: "81.45", userWater: "67", nrwRate: 89 },
      { label: "鼎力", proviceWater: "145.45", userWater: "140.45", nrwRate: 55 },
    ];
    var xData3 = nrwData?.map((item: any) => item.label);
    const userWater = nrwData?.map((item) => Number(item.userWater) <= 0 ? 0 : item.userWater);
    const lineData = nrwData?.map((item) => item.nrwRate >= 100 ? 0 : item.nrwRate);

    const getEchartLeft1 = () => {
      const myChart = {} as any;
      myChart[`myChart${props.map_index + 1}`] = echart.init(document.getElementById(`im8${props.map_index + 1}`));
      // 实例化对象
      // let myChart = echart.init(document.getElementById('im8'));
      // 指定配置和数据
      let option = {
        tooltip: {
          trigger: "axis",
          show: true,
          backgroundColor: "rgba(16, 34, 79, 0.9)",
          borderColor: "#274370",
          textStyle: {
            color: "#fff",
            fontSize: 8,
          }
        },
        legend: {
          show: true,
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          textStyle: {
            fontSize: 10,
            color: "#ccc",
          },
        },
        grid: {
          left: 30,
          bottom: 20,
          top: 30,
          right: 30,
        },
        xAxis: {
          data: xData3,
          // name: "\n\n\n(月)",
          nameTextStyle: {
            color: "#7089ba",
            fontSize: "10px"
          },
          // 坐标轴刻度相关设置
          axisTick: {
            show: false,
          },
          nameGap: -9,
          // 坐标轴线的相关设置
          axisLine: {
            show: true,
            lineStyle: {
              color: "#999999",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#092b5d',
              type: 'dashed'//虚线
            },
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 可以设置成 0 强制显示所有标签
            interval: 0,
            textStyle: {
              color: "#7089ba",
              fontSize: "10px"
            },
            margin: 10, //刻度标签与轴线之间的距离。
          },
        },
        yAxis: [{
          type: "value",
          name: "单位  (台)",
          nameTextStyle: {
            color: "#999",
            fontSize: "10px"
          },
          // 坐标轴在grid区域中的分隔线
          splitLine: {
            show: true,
            lineStyle: {
              color: '#092b5d',
              type: 'dashed'//虚线
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#7089ba",
              fontSize: "10px",
            },
          },
        },
        {
          type: "value",
          name: "金额  (万元)",
          min: 0,
          max: 100,
          nameTextStyle: {
            color: "#999",
            fontFamily: "PingFangSC-Light",
            fontSize: "10px",
          },
          axisLabel: {
            textStyle: {
              color: "#7089ba",
              fontSize: "10px"
            }
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#092b5d',
              type: 'dashed'//虚线
            },
          },
        },
        ],
        series: [
          /*折线图*/
          {
            name: "高机资产价值",
            type: "line",
            symbol: 'circle',
            yAxisIndex: 1,
            z: 15,
            tooltip: {
              valueFormatter: function (value:any) {
                return value + "万元";
              }
            },
            // symbolSize: 10,
            lineStyle: {
              normal: {
                color: '#FFC010', // 线条颜色
              },
              borderColor: 'rgba(9, 202, 246,.1)',
            },
            itemStyle: {
              color: "rgba(14,30,73,1)",
              borderColor: "#FFC010",
              borderWidth: 2
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(255, 183, 47, 0.1)"
                }, {
                  offset: 1,
                  color: "rgba(255, 183, 47, 0)"
                }], false),
                shadowColor: 'rgba(255, 183, 47, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: lineData,
          },
          {
            name: "高机设备数",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              opacity: 0.1,
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(8, 199, 244, .1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(8, 199, 244, 1)",
                  },
                ]),
                barBorderRadius: 0,
                borderWidth: 0,
              },
            },
            label: {
              show: false,//数据不进行显示
              position: "top",
              distance: 10,
              color: "#fff",
            },
            tooltip: {
              valueFormatter: function (value:any) {
                return value + "台";
              }
            },
            data: userWater,
          },
        ],
      };


      // 把配置给实例对象
      myChart[`myChart${props.map_index + 1}`].setOption(option, true);
      window.addEventListener('resize', () => {
        myChart[`myChart${props.map_index + 1}`].setOption(option, true);
      });
    }


    return { getEchartLeft1, props };
  }
};
</script>


<style scoped lang="scss">
@import './index.scss';
</style>
