/**
 * 本地接口代理
 */

const unitePre = '/boss';

// 环境列表
const envList = ['dev', 'sit', 'product', 'dev-gray', 'gyl-dev', 'gyl-sit', 'gyl-prond', 'xn-dev', 'pre', 'gyl-pre', 'dev-1', 'test-1', 'test', 'xn-sit'];
const proxyList = [
  {
    target: 'https://api-{env}.znlh.work/',
    sysList: [
      '/billing-center',
      '/billing-center',
      '/infrastructure-certificate',
      '/operation-system',
      '/merchant-mbo',
      '/merchant-ddcs',
      '/merchant-esign',
      '/infrastructure-integration',
      '/infrastructure-authority',
      '/trade-goods',
      '/delivery-fulfillment',
      '/trade-order',
      '/transport-system',
      '/finance-gateway',
      '/finance-payment',
      '/finance-billing',
      '/infrastructure-message',
      '/dispatch-traffic',
      '/operation-marketing',
      '/merchant-authority',
      '/crm-customer', // 商机
      '/dispatch-match',
      '/crm-infra',
      '/knowledge',
      '/risk-controlling',
      '/trade-contract',
      '/web-aPaaS',
      '/merchant-order',
      '/demo-paas',
      '/infra-authority',
      '/logistics-manager',
      '/asset-warehouse',
      '/service-center',
      '/infrastructure-workflow',
      '/service-center',
      '/cust-saas-order',
      '/cust-saas-account',
      '/asset-manager',
      '/bigdata-log-collect',
      '/apaas-base',
      '/delivery-agreement',
      '/write-off-center',
      '/invoice-center',
      '/accounts-center',
      '/call-center',
      '/asset-accessory',
      '/infrastructure-metadata',
      '/order-manage',
      '/core-ability',
      '/clue-center-system',
      '/core-label',
      '/merchant-themis',
      '/customer-service-system',
      '/customer-service-center',
      '/infrastructure-impexp',
      '/delivery-center',
      '/merchant-scfinance',
      '/merchant-cts',
      '/infrastructure-license',
      '/operation-business-ticket',
      '/infrastructure-console',
      '/finance-settlement',
      '/payment-center',
      '/infrastructure-admin',
      '/infrastructure-sign',
      '/bigdata-data-query',
    ],
  },
  {
    target: 'https://apioss-{env}.znlh.work/',
    sysList: [
      '/infrastructure-oss',
    ],
  },
  {
    target: 'http://192.168.34.223:8085/',
    sysList: [
      '/dev-carrier',
    ],
  },
  {
    target: 'http://cmdb.znlhzl.org/',
    sysList: [
      '/api/alert',
    ],
  },
  {
    target: 'https://pc-map2code.kaigongla.cn/',
    sysList: [
      '/getmap',
    ],
  },
];

const getProxy = () => {
  const data = {};
  envList.forEach((env) => {
    proxyList.forEach((p, index) => {
      p.sysList.forEach((sys) => {
        const curKey = `${unitePre}/${env}${sys}`;
        let curTarget = p.target.replace('{env}', env);
        if (env === 'product') {
          // 判断正式环境添加target
          curTarget = 'https://api.kaigongla.cn/';
          if (index === 1) {
            // 判断正式环境添加oss服务的target
            curTarget = 'https://apioss.kaigongla.cn/';
          }
          if (index === 3) {
            // 判断正式环境添加oss服务的target
            curTarget = 'http://cmdb.znlhzl.org/';
          }
        }
        const rule = `^${curKey}`;
        if (sys === '/dev-carrier') {
          data[curKey] = {
            target: curTarget,
            secure: false,
            logLevel: 'debug',
            pathRewrite: {
              [rule]: '',
            },
          };
        } else {
          data[curKey] = {
            target: curTarget,
            secure: false,
            logLevel: 'debug',
            pathRewrite: {
              [rule]: sys,
            },
          };
        }
      });
    });
  });
  return data;
};

const proxyConfig = {
  '/boss/mock': {
    target: 'https://yapi.znlh.work',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/boss/mock': '/mock',
    },
  },
  '/api/get_token': {
    target: 'https://www.soboten.com/',
    secure: false,
    logLevel: 'debug',
  },
  '/tokens/agent': {
    target: 'https://www.soboten.com/',
    secure: false,
    logLevel: 'debug',
  },
  '/api/public/5/agent/query_agents': {
    target: 'https://www.soboten.com/',
    secure: false,
    logLevel: 'debug',
  },
  '/callservice/v6/webmsg/agent/_makeCall': {
    target: 'https://openapi.soboten.com/',
    secure: false,
    logLevel: 'debug',
  },
  ...getProxy(),
};
module.exports = {
  proxyConfig,
  envList,
};
