/**
 * 地图geo
 */
const map_geo = {
  map: 'china',
  show: true,
  roam: false,
  zoom: 1.2, //当前视角的缩放比例
  aspectScale: 0.85,
  layoutCenter: ["49%", "69.5%"], //地图位置
  layoutSize: '100%',
  itemStyle: {
    normal: {
      areaColor: 'rgba(128, 128, 128, 0)', //rgba设置透明度0
      borderColor: 'rgba(128, 128, 128, 0)',//省份边框颜色
      borderWidth: 1.5,//省份边框
    },
    emphasis: {
      areaColor: '#0f2c70'
    }
  },
} as any;
/**
 * 地图series
 */

const map_series = [
  // 散点除了data以外的配置
  {
    name: '散点',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    // 显示的点
    data: [],
    // 气泡大小
    symbolSize: 15,
    symbol: 'circle',
    label: {
      //   显示位置
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    showEffectOn: 'render',
    itemStyle: {
      normal: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(9, 207, 252,1)'
          },
          {
            offset: 0.1,
            color: 'rgba(9, 207, 252,1)'
          },
          {
            offset: 0.2,
            color: 'rgba(9, 207, 252,1)'
          },
          {
            offset: 0.3,
            color: 'rgba(9, 207, 252,1)'
          },
          {
            offset: 0.4,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 0.5,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 0.6,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 0.7,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 0.8,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 0.9,
            color: 'rgba(9, 207, 252,.1)'
          },
          {
            offset: 1,
            color: 'rgba(9, 207, 252,.1)'
          }
          ],
          // 圆点圈的显示
          global: false // 缺省为 false
        },
      }
    },

  },
  // 覆盖面的地图
  {
    type: 'map',
    map: 'china',
    geoIndex: 1,
    aspectScale: 0.78,
    layoutCenter: ["57.8%", "72.7%"], //地图位置
    layoutSize: '100%',
    showLegendSymbol: false, // 存在legend时显示
    selectedMode: "false",
    zoom: 2, //当前视角的缩放比例
    // roam: true, //是否开启平游或缩放
    scaleLimit: { //滚轮缩放的极限控制
      min: 1,
      max: 2
    },
    tooltip: {
      show: true,
    },
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false
      }
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: 'rgba(128, 128, 128, 0)', //rgba设置透明度0
        borderColor: 'rgba(128, 128, 128, 0)',//省份边框颜色
        borderWidth: 1.5,//省份边框
      },
      emphasis: {
        areaColor: '#0f2c70'
      }
    },
  },
] as any;

export default {
  map_geo,
  map_series,
};
