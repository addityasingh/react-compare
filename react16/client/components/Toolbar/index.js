import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import VariantButton from '../Button/VariantButton';

const Toolbar = (props) => (
    <ABTestContext.Provider value={'test-a'}>
        <VariantButton></VariantButton>
    </ABTestContext.Provider>
);

export default Toolbar;