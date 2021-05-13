import React from 'react'
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

export const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (
    <div className={`${size} menu-item`}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            onClick={() => history.push(`${match.url}${linkUrl}`)} 
        >

        </div>
        <div className='content'>
          <div className='title'>{title.toUpperCase()}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>    
)}


export default withRouter(MenuItem);
