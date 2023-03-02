import React from 'react';
import { Typography,Grid ,Box,Avatar,Table,TableBody,TableCell,TableRow, TableHead, Paper, TableContainer} from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const customers = [
  {
    flagUrl: 'https://countryflagsapi.com/png/usa',
    countryName: 'United States',
    userName: 'john_doe',
    percentage: 87,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/canada',
    countryName: 'Canada',
    userName: 'jane_doe',
    percentage: 72,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/australia',
    countryName: 'Australia',
    userName: 'bob_smith',
    percentage: 63,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/england',
    countryName: 'United Kingdom',
    userName: 'alice_jones',
    percentage: 55,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/japan',
    countryName: 'Japan',
    userName: 'yoshi_tanaka',
    percentage: 42,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/france',
    countryName: 'France',
    userName: 'pierre_dubois',
    percentage: 37,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/usa',
    countryName: 'United States',
    userName: 'john_doe',
    percentage: 87,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/canada',
    countryName: 'Canada',
    userName: 'jane_doe',
    percentage: 72,
  },
  {
    flagUrl: 'https://countryflagsapi.com/png/australia',
    countryName: 'Australia',
    userName: 'bob_smith',
    percentage: 63,
  },
  // ... more customers
];
const coins = [
  {coin:"Bitcoin",Price:"+$145.85"},
  {coin:"Etherium",Price:"-$6.55"},
  {coin:"Ripple",Price:"+$456.15"},
  {coin:"Neo",Price:"-$5.85"},
  {coin:"Bitcoin",Price:"+$145.85"},
  {coin:"Etherium",Price:"+$14.55"},
  {coin:"Ripple",Price:"+$456.15"},
  {coin:"Neo",Price:"+$5.85"}
 
]
function Dashboard() {
  return (
    <Grid container spacing={2} backgroundColor={"#e0f1fe"} sx={{p:2}}>
    <Grid item md={9} xs={12}>
    <Grid container spacing={2}>

      <Grid item xs={12}>
       <Paper elevation={3} >
           <img src={require("../assets/images/areaChart.png")} style={{width:"100%",height:"100%",borderRadius:3}} alt={"areaChart"} />
       </Paper>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Box sx={{backgroundColor:"#7d00b7" , p:2 ,display:"flex",justifyContent:"space-between",borderRadius:2}} >
          <Grid  >
          <Typography variant="h6" align="left" color={"inherit"}>
            Revenue
          </Typography>
          <Typography variant="h5" align="left" color={"inherit"}>$ 42,562</Typography>
          <Typography variant="body1" align="left" color={"inherit"}>$ 50,562 Last Month</Typography>
          </Grid>
          <Grid alignSelf={"center"}>
            <MonetizationOnOutlinedIcon fontSize='large'/>
          </Grid>
        </Box>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Box sx={{backgroundColor:"#007df5" , p:2 ,display:"flex",justifyContent:"space-between",borderRadius:2}} >
          <Grid  >
          <Typography variant="h6" align="left">
            Orders Received 
          </Typography>
          <Typography variant="h5" align="left"> 486</Typography>
          <Typography variant="body1" align="left">20% Increase</Typography>
          </Grid>
          <Grid alignSelf={"center"}>
            <AccountCircleOutlinedIcon fontSize='large'/>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} >
        <Box sx={{backgroundColor:"white",borderRadius:2,p:2}}>
       <TableContainer sx={{maxHeight:"500px"}}>
       <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
            <Typography variant="h6" >Latest Customers</Typography>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                <Avatar
                alt="Remy Sharp"
                src={{uri:customer.flagUrl}} />
              </TableCell>
              <TableCell align="right">{customer.countryName}</TableCell>
              <TableCell align="right">{customer.userName}</TableCell>
              <TableCell align="right">{customer.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       </TableContainer>
        <Grid item xs={12} sx={{m:2}}>
          <Typography variant="body1" align="right" >
            <Link to="/userList" color="primary">View All Latest Customers</Link>
          </Typography>
        </Grid>
        </Box>
      </Grid>

    </Grid>
    </Grid>


    <Grid item md={3} xs={12} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box sx={{backgroundColor:"white",borderRadius:2,p:2}}>
       
        <TableContainer sx={{maxHeight:"400px",}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4}> <Typography variant="h6" >Total Revenue</Typography></TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {coins.map((coin,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="left">{coin.coin}</TableCell>
              <TableCell align="right">{coin.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </TableContainer>
        </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{backgroundColor:"#7d00b7",borderRadius:2,p:2}}>
            <Typography variant='h6' align='center'>16,58</Typography>
            <Typography variant='body2' align='center'>Daily User</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{backgroundColor:"#007df5",borderRadius:2,p:2}}>
          <Typography variant='h6' align='center'>1K</Typography>
            <Typography variant='body2' align='center'>Daily Page View</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid>
        
      </Grid>
    </Grid>
   </Grid>

  );
}

export default Dashboard;
