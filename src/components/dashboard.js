import React from 'react';
import { Typography,Grid ,Box,Avatar,Link,Table,TableBody,TableCell,TableRow, TableHead} from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { textAlign } from '@mui/system';

const customers = [
  {
    flagUrl: 'https://www.countryflags.io/us/flat/64.png',
    countryName: 'United States',
    userName: 'john_doe',
    percentage: 87,
  },
  {
    flagUrl: 'https://www.countryflags.io/ca/flat/64.png',
    countryName: 'Canada',
    userName: 'jane_doe',
    percentage: 72,
  },
  {
    flagUrl: 'https://www.countryflags.io/au/flat/64.png',
    countryName: 'Australia',
    userName: 'bob_smith',
    percentage: 63,
  },
  {
    flagUrl: 'https://www.countryflags.io/uk/flat/64.png',
    countryName: 'United Kingdom',
    userName: 'alice_jones',
    percentage: 55,
  },
  {
    flagUrl: 'https://www.countryflags.io/jp/flat/64.png',
    countryName: 'Japan',
    userName: 'yoshi_tanaka',
    percentage: 42,
  },
  {
    flagUrl: 'https://www.countryflags.io/fr/flat/64.png',
    countryName: 'France',
    userName: 'pierre_dubois',
    percentage: 37,
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
    <Grid container spacing={2} backgroundColor={"#e0f1fe"}>
    <Grid item sm={9} xs={12}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">Graph</Typography>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box sx={{backgroundColor:"#7d00b7" , p:2 ,display:"flex",justifyContent:"space-between",borderRadius:2}} >
          <Grid  >
          <Typography variant="h6" align="left">
            Revenue
          </Typography>
          <Typography variant="h5" align="left">$ 42,562</Typography>
          <Typography variant="body1" align="left">$ 50,562 Last Month</Typography>
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
        <Typography variant="h6" >Latest Customers</Typography>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Flag
              </TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Percentage</TableCell>
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
        <Grid item xs={12} style={{p:3}}>
          <Typography variant="body1" align="right" >
            <Link href="/customers" color="primary">View All Latest Customers</Link>
          </Typography>
        </Grid>
        </Box>
      </Grid>
    </Grid>
    </Grid>
    <Grid item sm={3} xs={12} >
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box sx={{backgroundColor:"white",borderRadius:2,p:2}}>
        <Typography variant="h6" >Total Revenue</Typography>
        <Table  aria-label="simple table">
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
        </Box>
        </Grid>
        <Grid xs={12}>
          <Box sx={{backgroundColor:"violet"}}>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{backgroundColor:"blue"}}>
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
