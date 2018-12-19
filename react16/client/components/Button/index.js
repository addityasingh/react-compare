import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import LoadableComponent from '../LoadableComponent';

const VariantButton = (props) => (
    <ABTestContext.Consumer>
    {val => {
        console.log('>>>>>>>>>>>variant', val);
        const AsyncComponent = LoadableComponent(() => import(`../Button/${val}.js`));
        return <AsyncComponent {...props} />;
    }}
    </ABTestContext.Consumer>
);

export default VariantButton;