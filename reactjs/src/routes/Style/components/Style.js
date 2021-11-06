import React from 'react'
import '../assets/Style.css'
import styles from '../assets/Style.module.css' // dùng styles như Object
import classnames from 'classnames'

export default class Style extends React.Component {
  render() {
    const isShow = false

    return (
      <div className={`demo-style${isShow ? ' ' + styles.demoStyleSiblings : ''}`} style={{ // object
        backgroundColor: 'red', // key: value
        color: 'white'
      }}>
        Đây là component demo style của React
        {/* <div className={`${styles.demoStyle} ${styles.demoStyleSiblings}`}> */}
        <div className={classnames([styles.demoStyle, { [styles.demoStyleSiblings]: isShow }])}>
          Demo CSS module
          <div className={styles.demoStyleChild}>
            Thử trỏ CSS tới thẻ
          </div>
        </div>
      </div>
    )
  }
}

// demoName = 'name'
// haro.name === haro[demoName]
