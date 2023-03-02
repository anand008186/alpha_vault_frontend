import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography,Box,IconButton,Badge,Avatar ,Menu,MenuItem, Grid} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout,update } from '../store/authSlice';
import Dashboard from './dashboard';
import { Outlet, useNavigate } from 'react-router-dom';


function AdminPanel() {
  const navigate= useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [file, setFile] = useState();


  const user = useSelector((state) => state.auth.user);
  const profilePic = useSelector((state) => state.auth.profilePic);
  const dispatch = useDispatch();

  // useEffect(()=> {
  //   if(user===null){
  //     navigate('/');
  //   }
  // },[navigate,user]);

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
    navigate('/');
  };
  const handleProfileMenuOpen = (event) => {
   setAnchorEl(event.currentTarget);
   console.log(anchorEl)
  };

  const handleProfileChange= (e) => {
      console.log(e.target.files);
      // setFile();
      dispatch(update(URL.createObjectURL(e.target.files[0])))
      setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
      <AppBar position="static" color="inherit" >
        <Toolbar  style={{display:"flex",justifyContent:"space-between"}} >
          <Typography variant="h6" >
            {user?.type === "customer"? "Customer" :"Admin"} Panel
          </Typography>
         {
          user && <Typography variant="h5" color={"GrayText"} >Welcome {user?.type === "customer"? "Customer" :"Admin"} </Typography>
         }
      
            <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton >
            {/* <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton> */}
           <div>
           <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
 <Avatar
  alt="Remy Sharp"
  src={profilePic}
  sx={{ width: 46, height: 46 }}
/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem >
                <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        onChange={handleProfileChange}
      />
       <label htmlFor="contained-button-file">
       Change Avatar
      </label>
                 </MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
           </div>
          </Box>
         
        </Toolbar>
      </AppBar>
      </Grid>
    </Grid>
  );
}

export default AdminPanel;
