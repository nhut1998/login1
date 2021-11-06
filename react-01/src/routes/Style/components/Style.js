import React from 'react'
import '../assets/Style.css'
import style from '../assets/Style.module.css'
import classnames from 'classnames'

export default class Style extends React.Component {
    render() {
        const isShow = true
        return (
            <div className={`demo-style ${isShow ? style.demoStyleSecond : ''}` }>
                This is components demo of React's style
                {/* <div className={`${style.demoStyle} ${style.demoStyleSecond}`}> */}
                <div className={classnames([style.demoStyle, {[style.demoStyleSecond]: isShow}])}>
                    Demo CSS module
                </div>
            </div>
        )
    }
}