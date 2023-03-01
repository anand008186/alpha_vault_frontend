import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography,Box,IconButton,Badge,Avatar ,Menu,MenuItem, Grid} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../store/authSlice';
import Dashboard from './dashboard';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

function AdminPanel() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleProfileMenuOpen = (event) => {
   setAnchorEl(event.currentTarget);
   console.log(anchorEl)
  };
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
            Admin Panel
          </Typography>
          {/* {user && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )} */}
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
  src={require("../assets/images/profile.jpg")}
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
                <MenuItem onClick={handleClose}>Change Avatar</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
           </div>
          </Box>
         
        </Toolbar>
      
       
      </AppBar>
      </Grid>
      <Grid item xs={12} style={{p:2}} >
      <Dashboard />
      </Grid>
    </Grid>
  );
}

export default AdminPanel;
