import React, {Component} from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collectionpage/collection-page.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsFecthing, selectCollectionLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component{

    componentDidMount(){
       const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync();
    }

    render(){
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsFecthing,
    isCollectionLoaded: selectCollectionLoaded
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
