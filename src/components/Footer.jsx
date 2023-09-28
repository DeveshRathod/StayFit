import React from 'react'
import {Box,Stack, Typography} from "@mui/material"
import Logo from "../assets/images/Logo-1.png"

function Footer() {
  return (
  <Box mt="80px" bgcolor="#fff3f4">
    <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt="" width="10%" height="10%" />
      <Typography variant='h5'  pb="40px" >
        copyright @gym
      </Typography>
    </Stack>
  </Box>
  )
}

export default Footer