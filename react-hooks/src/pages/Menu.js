import React from 'react'
import menus from '.'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          color: 'rgb(255,166,0)',
          margin: '20px auto',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Demo List
      </div>
      {menus
        .filter(item => item.title !== 'menu')
        .map(menu => (
          <NavLink
            to={menu.path}
            style={{
              display: 'block',
              width: 200,
              margin: '5px auto',
              padding: 20,
              background: '#f0f0f0',
              textAlign: 'center',
              color:
                menu.status === 0
                  ? 'rgb(191,191,191)'
                  : menu.status === 2
                  ? 'rgb(255,166,0)'
                  : 'rgb(64,169,255)',
            }}
          >
            {menu.title}
          </NavLink>
        ))}
      <div style={{ margin: '60px auto 20px', textIndent: '40%' }}>
        <span
          style={{ background: 'rgb(191,191,191)', padding: '8px 16px' }}
        ></span>
        <span>表示未完成</span>
      </div>
      <div style={{ margin: '20px auto', textIndent: '40%' }}>
        <span
          style={{ background: 'rgb(255,166,0)', padding: '8px 16px' }}
        ></span>
        <span>表示最近完成</span>
      </div>
      <div style={{ margin: '20px auto', textIndent: '40%' }}>
        <span
          style={{ background: 'rgb(64,169,255)', padding: '8px 16px' }}
        ></span>
        <span>表示正常</span>
      </div>
    </div>
  )
}
