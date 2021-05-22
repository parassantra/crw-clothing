import React from 'react'
import CollectionPreview from '../preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './collection-overview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

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
    collections: selectCollectionsForPreview
})
  
export default connect(mapStateToProps) (CollectionOverview);
