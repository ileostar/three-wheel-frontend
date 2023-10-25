import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ConfigProvider theme={{
      components: {
        Table: {
          borderColor: 'rgba(0, 255, 0, 0.15)',
          headerBg: 'rgba(0, 255, 0, 0.15)',
          fixedHeaderSortActiveBg: 'rgba(0, 255, 0, 0.3)',
          headerSortActiveBg: 'rgba(0, 255, 0, 0.3)',
        },
      },
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
