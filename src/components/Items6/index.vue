<template>
  <div class="business-container">
    <div class="chart" id="im6"></div>
  </div>
</template>


<script lang="ts">
import * as echarts from "echarts";

import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items4",
  setup() {
    /// 声明定义一下echart
    let echart = echarts as any;

    onMounted(() => {
      getEchartLeft3();
    });

    // onUnmounted(() => {
    //   echart.dispose;
    // });

    const getEchartLeft3 = () => {
      let myChart = echart.init(document.getElementById('im6'));
      let data = {
        city: ['2022.12', '2023.01', '2023.02', '2023.03', '2023.04', '2023.05'],
        num: ['555', '896', '1935', '2922', '4508', '5000'],
        num1: ['1000', '200', '400', '2431', '4508', '1892']
      }
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
          bottom: '-1%',
        },
        radar: {
          name: {
            color: '#fff',
          },
          axisLabel: {
            show: false,
            fontSize: 12,
            color: '#999',
            showMaxLabel: false, //不显示最大值，即外圈不显示数字30
            showMinLabel: true, //显示最小数字，即中心点显示0
          },
          axisLine: {
            color: '#fff',
            lineStyle: {
              color: '#999',
            },
          },
          indicator: [
            { text: '华北大区', max: 400 },
            { text: '华东大区', max: 400 },
            { text: '华南大区', max: 400 },
            { text: '华中大区', max: 400 },
            { text: '西北大区', max: 400 },
            { text: '西部大区', max: 400 },
            { text: '西南大区', max: 400 },
          ],
          splitArea: {
            show: true,
            areaStyle: {
              color: 'rgba(255,0,0,0)', // 图表背景的颜色
              // color: ['transparent', '#f1c35b', '#99c736', '#75813b', '#4e3829',]
              areaStyle: {
                color: '#fa4a31', // 图表背景的颜色
              },
              // 图表背景网格的颜色
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: ['rgb(30, 74, 136, 0.9)', '#3370B9']
              // 图表背景网格线的颜色
            }
          }
        },
        series: [
          {
            type: 'radar',
            symbol: 'circle',
            symbolSize: 6, // 拐点的大小
            areaStyle: {
              normal: {
                width: 1,
                opacity: 0.2,
              },
            },
            emphasis: {
              areaStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: [390, 209, 100, 321, 239, 214, 325],
                name: '项目数',
                // 设置区域边框和区域的颜色
                itemStyle: {
                  normal: {
                    color: 'rgba(255, 183, 47,.8)',
                    lineStyle: {
                      color: 'rgba(255, 183, 47,.8)',
                    },
                  },
                },
                //在拐点处显示数值
                label: {
                  normal: {
                    show: true,
                    color: '#999',
                    formatter: (params: any) => {
                      return params.value
                    },
                  },
                },
              }
            ]

          },
          {
            type: 'radar',
            symbol: 'circle',
            symbolSize: 6, // 拐点的大小
            areaStyle: {
              normal: {
                width: 1,
                opacity: 0.2,
              },
            },
            emphasis: {
              areaStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: [150, 290, 100, 321, 239, 214, 325],
                name: '在合作项目数',

                // 设置区域边框和区域的颜色
                itemStyle: {
                  normal: {
                    color: 'rgba(9, 207, 252,.8)',
                    lineStyle: {
                      color: 'rgba(9, 207, 252,.8)',
                    },
                  },
                },
                //在拐点处显示数值
                label: {

                  normal: {
                    show: true,
                    color: '#999',
                    formatter: (params: any) => {
                      return params.value
                    },
                  },
                },
              }
            ]

          },

        ]
      }


      myChart.setOption(option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      })
    }



    return { getEchartLeft3 };
  }
};
</script>


<style scoped lang="scss">
@import './index.scss';
</style>
