import React from 'react';
import style from './SearchForm.module.css'

const SearchForm = ({ onSubmit, value, onChange }) => (
    <form className={style.searchForm} onSubmit={onSubmit}>
        <input type="text" name='query' value={value} placeholder="Search images..." onChange={onChange} />
    </form>
);

export default SearchForm;