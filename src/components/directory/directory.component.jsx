import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

import MenuItems from '../menu-items/menu-items.component';
import './directory.styles.scss';

const  Directory = ({sections}) => {
    
    return ( 
        <div className="directory-menu">
            {
                sections.map(({title, imageUrl, id, size, linkUrl}) => (
                    <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);