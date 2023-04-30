import { FormInput } from 'components/common/FormInput.styled';
import { FormLabel } from 'components/common/FormLabel.styled';
import React from 'react';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterContainer } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => {
    const inputValue = e.currentTarget.value;
    dispatch(setFilter(inputValue));
  };
  return (
    <FilterContainer>
      <FormLabel>
        Filter
        <FormInput type="text" onChange={onChange} />
      </FormLabel>
    </FilterContainer>
  );
};

export default Filter;
