import React from 'react';
import ABTestContext from '../../contexts/ABTestContext';
import Button from '../Button';

const Toolbar = ({ variant }) => {
    return (
    <ABTestContext.Provider value={'ButtonA'}>
        <Button></Button>
    </ABTestContext.Provider>);
};

export default Toolbar;