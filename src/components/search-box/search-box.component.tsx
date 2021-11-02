import React from 'react';
import './search-box.styles.css';

interface SearchBoxProps {
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props: SearchBoxProps) => {
  const { placeholder, changeHandler } = props;
  return (
    <input className="search" type="search" placeholder={placeholder} onChange={changeHandler} />
  );
};

export default SearchBox;
