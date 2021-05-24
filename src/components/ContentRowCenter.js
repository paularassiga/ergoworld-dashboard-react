import React from 'react';
import LastProduct from './LastProduct';
import LastUser from './LastUser';
import ProductsInDb from './ProductsInDb';
import Categories from './Categories';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastProduct />
            <LastUser />
            <ProductsInDb />
        </div>
    )
}

export default ContentRowCenter;