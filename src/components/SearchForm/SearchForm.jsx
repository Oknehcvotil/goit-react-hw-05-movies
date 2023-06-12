import { useState } from 'react';
import { Form, Input, FormBtn } from './SearchForm.styled';
import { toast } from 'react-toastify';

const SearchForm = ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.warning('Please write what you are looking for.');
      return;
    }

    handleSearch(value);

    setValue('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={value}
        />
        <FormBtn type="submite">Search</FormBtn>
      </Form>
    </>
  );
};

export default SearchForm;
