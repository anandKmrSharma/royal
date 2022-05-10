import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const BasicMenu= ()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
    <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Tariff</MenuItem>
        <MenuItem onClick={handleClose}>Store</MenuItem>
        <MenuItem onClick={handleClose}>Ride and Train</MenuItem>
        <MenuItem onClick={handleClose}>Partner with us</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Indian bike Routes</MenuItem>
        <MenuItem onClick={handleClose}>About us</MenuItem>
        <MenuItem onClick={handleClose}>Terms and condition</MenuItem>
        <MenuItem onClick={handleClose}>Bike Tour</MenuItem>
        <MenuItem onClick={handleClose}>Privacy policy</MenuItem>
        <MenuItem onClick={handleClose}>Faq</MenuItem>
        <MenuItem onClick={handleClose}>Reach us</MenuItem>



      </Menu>
    </div>
  );
}

export {BasicMenu}
