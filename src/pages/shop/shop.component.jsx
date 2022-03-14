import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';



const ShopPage = ({ match }) => {
    console.log(match)
    return (
        <div className='collections-page'>
            <Switch>
                <Route component={CollectionsOverview} exact path={`${match.path}`} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </Switch>
            

        </div>
    )
}




export default ShopPage;