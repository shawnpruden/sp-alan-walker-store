import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Icon } from '../../pages/Products/styles';

function PopperOver({ id, variant_groups, onAddToCart }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    e.preventDefault();

    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e, productId, varGroupId, varOptionId) => {
    e.preventDefault();

    const size = { [varGroupId]: varOptionId };

    onAddToCart(productId, 1, size);
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
        onClose={handleClose}
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

export default PopperOver;
