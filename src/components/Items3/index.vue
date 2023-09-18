<template>
  <div class="business-container">
    <div class="chart" id="im3"></div>
  </div>
</template>


<script lang="ts">
import * as echarts from "echarts";

import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items3",
  setup() {
    /// 声明定义一下echart
    let echart = echarts as any;

    onMounted(() => {
      getEchartLeft1();
    });

    // onUnmounted(() => {
    //   echart.dispose;
    // });

   const getEchartLeft1 = () => {
      // 实例化对象
      let myChart = echart.init(document.getElementById('im3'));
      let charts = { // 按顺序排列从大到小
        cityList: ['12米 剪叉车', '10米 曲臂车', '10米 曲臂车', '10米 曲臂车', '10米 曲臂车', '10米 曲臂车', '10米 曲臂车', "10米 曲臂车", "10米 曲臂车", "10米 曲臂车"],
        cityData: [1500, 1200, 900, 600, 400, 300, 100, 200, 300, 600]
      }

      let top10CityList = charts.cityList;
      let top10CityData = charts.cityData;
      let color = ['rgba(253,205,60'];

      let lineY = [];
      for (let i = 0; i < charts.cityList.length; i++) {
        let x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        let data = {
          name: charts.cityList[i],
          color: color[0] + ')',
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echart.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: color[0] + ', 0.1)'
              }, {
                offset: 1,
                color: color[0] + ', 1)'
              }], false),
              barBorderRadius:10
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
        lineY.push(data)
      }

      // 指定配置和数据
      let option = {
        color: color,
        tooltip: {
          trigger: 'item',
        },
        grid: {
          borderWidth: 0,
          top: '5%',
          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          inverse: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          // 左侧name样式
          axisLabel: {
            // formatter: function(val){
            //   return '{b|' + 2 + '}' +' ' + val;
            // }
            show: false,
            inside: false,
            margin: 12,
            textStyle: {
              color: '#ccc',
              fontSize: 13
            },
          //   rich: {
					// 	a: {
					// 		padding:[1,4,3,4],
					// 		borderRadius:20,
          //                   backgroundColor:'#fbad0b',
          //                   fontSize: '9',
					// 	},
					// 	b: {
					// 		padding:[1,4,3,4],
					// 		borderRadius:20,
          //                   backgroundColor: '#ed5762',
          //                   fontSize: '9',
					// 	},
					// 	c: {
					// 		padding:[1,4,3,4],
					// 		borderRadius:20,
          //                   backgroundColor: '#67d96a',
          //                   fontSize: '9',
					// 	},
					// 	d: {
          //                   padding:[1,4,3,4],
					// 		borderRadius:20,
          //                   backgroundColor: '#37b7ff',
          //                   fontSize: '9',
					// 	}
					// },


          },

          data: top10CityList
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          // 右侧数字样式
          axisLabel: {
            show: true,
            inside: false,
            textStyle: {
              color: '#fff',
              fontSize: 13,

            },
            formatter: (val:any) => {
              return `${val}`
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: top10CityData.reverse()
        }],
        series: [{
          name: '',
          type: 'bar',
          zlevel: 2,
          barWidth: '3px',
          data: lineY,
          animationDuration: 3000,
          barGap:'100',/*多个并排柱子设置柱子之间的间距*/

          label: {
            normal: {
              color: '#fff',
              show: true,
              position: [0, '-15px', 0, 0],
              textStyle: {
                fontSize: 13
              },
              formatter: (a:any, b:any) => {
                return a.name;
              }
            }
          },
          barCategoryGap:'100',
        }]
      };

      // 把配置给实例对象
      myChart.setOption(option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }


    return { getEchartLeft1 };
  }
};
</script>


<style scoped lang="scss">
@import './index.scss';

</style>
