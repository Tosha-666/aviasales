import React from "react";
import { Spin } from 'antd'
import 'antd/dist/antd.min.css'
import './Spinner.scss'

const Spinner =()=>{
    return(
        <Spin size="large" className="spinner" />
    )
}

export default Spinner