import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const SearchDropdownPage = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="search-nav">
        Search by
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        <Dropdown.Item className='dropdown-items'>
          <Link to="/users">Users</Link>
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-items'>
          <Link to="/pets">Pets</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
