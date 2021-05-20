import React from 'react'
import CollectionPreview from '../preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './collection-overview.component'

const CollectionOverview= ({collections}) => {
    return (
        <div>
        {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        }        
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
  
export default connect(mapStateToProps) (CollectionOverview);
