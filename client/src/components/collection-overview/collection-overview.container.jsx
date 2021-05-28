import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsFecthing } from '../../redux/shop/shop.selector';
import CollectionOverview from './collection-overview.component';
import { compose } from 'redux';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFecthing
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)
  
export default CollectionOverviewContainer;
