import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selector';

const Directory = ({sections}) => {
        return(
            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherProps}) =>
                        <MenuItem key={id} {...otherProps}/>
                    )
                }
            </div>
        )
} 

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);