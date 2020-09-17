import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  define: {
    'process.env.apiUrl': 'http://172.16.1.125:8293',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login/index',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          redirect: '/index',
          exact: true,
        },
        {
          path: '/index',
          component: 'index',
          exact: true,
        },
        {
          path: '/index/detail',
          component: 'index/detail',
          exact: true,
        },
      ],
    },
  ],
});
