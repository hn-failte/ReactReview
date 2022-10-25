import React from 'react'

export default [
  {
    status: 1,
    title: 'menu',
    path: '/menu',
    component: React.lazy(() => import('./Menu')),
  },
  {
    status: 1,
    title: 'Hooks: useState、useEffect、useRef',
    path: '/hooks',
    component: React.lazy(() => import('./Hooks')),
  },
  {
    status: 0,
    title: 'React dnd',
    path: '/dnd',
    component: React.lazy(() => import('./Dnd')),
  },
  {
    status: 2,
    title: '类组件: redux',
    path: '/redux',
    component: React.lazy(() => import('./Redux')),
  },
  {
    status: 2,
    title: 'Hooks: useReducer',
    path: '/hooks2',
    component: React.lazy(() => import('./Hooks2')),
  },
  {
    status: 2,
    title: '类组件: context',
    path: '/context',
    component: React.lazy(() => import('./Context')),
  },
  {
    status: 2,
    title: '类组件: context2',
    path: '/context2',
    component: React.lazy(() => import('./Context2')),
  },
  {
    status: 2,
    title: 'Hooks: useContext',
    path: '/hooks3',
    component: React.lazy(() => import('./Hooks3')),
  },
  {
    status: 2,
    title: 'Hooks: 自定义Hooks',
    path: '/hooks4',
    component: React.lazy(() => import('./Hooks4')),
  },
  {
    status: 2,
    title: 'memo、useMemo',
    path: '/memo',
    component: React.lazy(() => import('./Memo')),
  },
]
