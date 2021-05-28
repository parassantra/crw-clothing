
import { connect } from 'react-redux';
import { selectCollectionLoaded } from '../../redux/shop/shop.selector';
import {compose} from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection-page.component';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector ({
    isLoading: state => !selectCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)
  
export default connect(mapStateToProps)(CollectionPageContainer);
