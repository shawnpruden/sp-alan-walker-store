import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCart } from 'features/cartSlice';

import { Menu, MenuItem } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Icon } from '../styles';

function PopperOverIcon({ id, variant_groups }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();

    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e, productId, varGroupId, varOptionId) => {
    e.preventDefault();

    const size = { [varGroupId]: varOptionId };

    dispatch(
      handleCart({ type: 'add', productId, quantity: 1, variant: size })
    );

    setAnchorEl(null);
  };

  return (
    <>
      <Icon onClick={handleClick}>
        <AddShoppingCartIcon fontSize="small" />
      </Icon>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={(e) => {
          e.preventDefault();
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {variant_groups[0].options.map((option) => (
          <MenuItem
            key={option.id}
            onClick={(e) => handleClose(e, id, variant_groups[0].id, option.id)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default PopperOverIcon;
