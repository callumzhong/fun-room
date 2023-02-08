import React from 'react'
import ReactDOM from 'react-dom/client'
import 'swiper/css'
import 'photoswipe/style.css'
import 'react-calendar/dist/Calendar.css'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'

import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
