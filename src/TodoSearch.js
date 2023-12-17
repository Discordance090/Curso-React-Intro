import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue ,setSerachValue}) {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSerachValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };
