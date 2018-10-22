import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import LoadableComponent from '../LoadableComponent';

const variantMap = {
    'control': '../Button/ButtonControl',
    'test-a': '../Button/ButtonA',
    'test-b': '../Button/ButtonB',
};

const VariantButton = () => (
    <ABTestContext.Consumer>
    {val => {
        const componentPath = variantMap[val];
        return <LoadableComponent componentPath={componentPath} />;
    }}
    </ABTestContext.Consumer>
);

export default VariantButton;