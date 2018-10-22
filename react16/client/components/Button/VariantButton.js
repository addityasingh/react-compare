import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import Button from '.';

const variantMap = {
    'control': 'orange',
    'test-a': 'green',
    'test-b': 'black',
};

const VariantButton = () => (
    <ABTestContext.Consumer>
    {val => {
        const colorClass = variantMap[val];
        return <Button colorClass={colorClass} />
    }}
    </ABTestContext.Consumer>
);

export default VariantButton;