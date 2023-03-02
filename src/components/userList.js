import React, { useState } from 'react'
import { Typography,Grid ,Box,Avatar,Table,TableBody,TableCell,TableRow, TableHead, Paper, TableContainer,TablePagination, IconButton,Modal} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';
import UserModalForm from './Modal';
function UserList() {
 const [userList,setUserList] = useState([
    {id: 1, user:"Anand" ,country:"India",friends:834,followers:1245, Status:"Active"},
    {id: 2 ,user:"Aman" ,country:"Canada",friends:324,followers:875, Status:"Pending"},
    {id: 3, user:"Abhishek" ,country:"Usa",friends:231,followers:3245, Status:"Pending"},
    {id: 4 ,user:"Amisha" ,country:"Pak",friends:1083,followers:970, Status:"Active"},
    {id: 5, user:"Aman" ,country:"Canada",friends:324,followers:875, Status:"Pending"},
    {id: 6 ,user:"Anand" ,country:"India",friends:834,followers:1245, Status:"Active"},
    {id: 7, user:"Amisha" ,country:"Pak",friends:1083,followers:970, Status:"Active"},
    {id: 8 ,user:"Abhishek" ,country:"Usa",friends:231,followers:3245, Status:"Pending"},
    {id: 9, user:"Anand" ,country:"India",friends:834,followers:1245, Status:"Active"},
    {id: 10, user:"Aman" ,country:"Canada",friends:324,followers:875, Status:"Pending"},
    {id: 11, user:"Abhishek" ,country:"Usa",friends:231,followers:3245, Status:"Pending"},
    {id: 12, user:"Amisha" ,country:"Pak",friends:1083,followers:970, Status:"Active"},
    {id: 13, user:"Aman" ,country:"Canada",friends:324,followers:875, Status:"Pending"},
    {id: 14, user:"Anand" ,country:"India",friends:834,followers:1245, Status:"Active"},
    {id: 15, user:"Amisha" ,country:"Pak",friends:1083,followers:970, Status:"Active"},
    {id: 16 ,user:"Abhishek" ,country:"Usa",friends:231,followers:3245, Status:"Pending"},
 ])
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(10);
 const [open, setOpen] = React.useState(false);
 const [selectedUser, setSelectedUser] = useState(null);
 const handleClose = () => setOpen(false);
 const onSave = (obj)=> {
  setUserList([...userList,obj]);
  handleClose()
  setSelectedUser(null);
 }
  

const handleDelete = (user)=>{
  const newUsers = userList.filter((User) => User.id !== user.id);
  setUserList(newUsers);
 }
 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(+event.target.value);
   setPage(0);
 };

  return (
    <>
     <Grid xs={12} sx={{backgroundColor:"#e0f1fe",p:2}}>
    <Box sx={{backgroundColor:"white",borderRadius:2,p:2}}>
   <Grid sx={{display:"flex",justifyContent:"space-between"}}>
   <Typography variant="h6" align="left">Lists</Typography>
  <Grid>
   <IconButton onClick={()=> setOpen(true)}>
   <AddCircleOutlineIcon fontSize='large'  />
   </IconButton>
  <IconButton>
  <FilterListIcon fontSize='large' sx={{px:4}}/>
  </IconButton>
  </Grid>
   </Grid>
   <TableContainer sx={{maxHeight:"600px"}}>
   <Table stickyHeader aria-label="sticky table">
    <TableHead>
      <TableRow>
        <TableCell align="right">#</TableCell>
        <TableCell align="right">User Profile</TableCell>
        <TableCell align="right">Country</TableCell>
        <TableCell align="right">Friends</TableCell>
        <TableCell align="right">Followers</TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {userList
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((user,index) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align='right'>{index+1}</TableCell>
          <TableCell align="right" component="th" scope="row" >
            {/* <Avatar
            alt="Remy Sharp"
            src={{uri:user?.flagUrl}}  /> */}
            {user.user}
          </TableCell>
          <TableCell align="right">{user.country}</TableCell>
          <TableCell align="right">{user.friends}</TableCell>
          <TableCell align="right">{user.followers}</TableCell>
          <TableCell align="right">{user.Status}</TableCell>
          <TableCell align="right">
          <IconButton onClick={()=>{
            setSelectedUser(user);
            setOpen(true);}}>
          <EditIcon style={{paddingRight:30}} color={"secondary"}/>
          </IconButton>
          <IconButton  onClick={handleDelete}>
        <NotInterestedIcon color={"warning"}/>

          </IconButton>
             </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
   </TableContainer>
   <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Box>
  </Grid>

  {/* Modal */}
  <UserModalForm
        open={open}
        onClose={handleClose}
        onSave={onSave}
        userData={selectedUser}
      />
    </>
   
  )
}

export default UserList