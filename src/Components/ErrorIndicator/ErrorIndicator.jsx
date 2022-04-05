import React from 'react'
import { Alert } from 'antd'
import 'antd/dist/antd.min.css'
import './ErrorIndicator.scss'

const ErrorIndicator = () => {
  return <Alert message="Error" type="error" closable showIcon />
}
export default ErrorIndicator
