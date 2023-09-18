<template>
  <div class="business-container">
    <div class="chart" id="im4"></div>
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
      let myChart = echart.init(document.getElementById('im4'));
      let data = {
        city: ['2015', '2016', '2017', '2018', '2019', '2020'],
        num: ['555', '896', '1935', '2922', '4508', '5000']
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
        grid: {
          top: '5%',
          left: '2%',
          right: '2%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#999999'
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#092b5d',
              type: 'dashed'//虚线
            },
          },

          axisLabel: { //坐标轴刻度标签的相关设置
            show: true,
            textStyle: {
              color: '#E5E5E5',
              margin: 15,
            },
            formatter: (data: any) => {
              return data;
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: true
          },
          // axisPointer: {
          //   show: true,
          //   label: {
          //     formatter: function (params: any) {
          //       return (
          //         'Precipitation  '
          //         // params.value +
          //         // (params.seriesData.length ? '：' + params.seriesData[0].data : '')
          //       );
          //     }
          //   }
          // },
          data: data.city
        }],
        yAxis: [{
          min: 0,
          max: 6000, // y轴的最大
          splitLine: {
            show: true,
            lineStyle: {
              color: '#092b5d',
              type: 'dashed'//虚线
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#092b5d",
              type: 'dashed'//虚线
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#E5E5E5',
            }
          },
          axisTick: {
            show: true,
          },
        }],
        series: [{
          name: '年度GMV',
          type: 'line',
          symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          symbolSize: 8,
          lineStyle: {
            normal: {
              color: '#00D4FF', // 线条颜色
            },
            borderColor: 'rgba(9, 202, 246,.1)',
          },
          itemStyle: {
            color: "rgba(14,30,73,1)",
            borderColor: "#00D4FF",
            borderWidth: 2
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              formatter: [
                ' {a|{c}}',
              ].join(','),
              rich: {
                a: {
                  color: '#fff',
                  align: 'center',
                },
              }
            }
          },
          smooth: false,  // true为平滑曲线 false为直线
          areaStyle: { //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new echart.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: "rgba(9, 207, 252, 0.3)"
              }, {
                offset: 1,
                color: "rgba(9, 207, 252, 0)"
              }], false),
              shadowColor: 'rgba(9, 207, 252, 0.9)', //阴影颜色
              shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: data.num
        }]
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
