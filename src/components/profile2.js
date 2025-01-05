import React from 'react'
import{Box,Button,TableContainer} from'@mui/material';
import LogoutIcon from '@mui/material/LogoutIcon';
import AddIcon from '@mui/material/AddIcon';
import { useNavigate } from 'react-router';
import{signOut} from 'firebase/auth';
import {auth} from '../../utils/firebase';
import{paper} from '@mui/material'
const profile = () => {
  const navigate=useNavigate();
  const handlePostNewUser=()=>{
    navigate('user');
  }
  const handleLogout=async()=>{
    try{
      await signOut(auth)
      navigate('/login')
    }catch(error){
      console.log(error);
    }
  }
  return (
    <TableContainer component={paper}>
 <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:2}}>
<Button 
variant='contained'
color='success'
onClick={handlePostNewUser}
>
  <AddIcon/>Post New User
</Button>
<Button variant='outlined' color='secondary' onClick={handleLogout}>
  <LogoutIcon/>Logout
 </Button>
 </Box>
 </TableContainer>
  )
}

export default profile