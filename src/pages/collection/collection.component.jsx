import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component'


const CollectionPage = ({collection}) => {
    console.log(collection)
    const { title, items } = collection;


    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>

                Hi
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

console.log(mapStateToProps)

export default connect(mapStateToProps)(CollectionPage)