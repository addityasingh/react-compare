import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import Button from '../Button';

const Toolbar = (props) => (
    <ABTestContext.Provider value={'test-a'}>
        <Button></Button>
    </ABTestContext.Provider>
);

export default Toolbar;