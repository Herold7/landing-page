
import { useState } from 'react'
import { Stack, Box, Fab, Button, Typography } from '@mui/material/';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="subtitle" textTransform={"uppercase"} fontSize='900' >Caractéristiques</Typography>
      <Typography variant="h1" fontWeight={600} color='secondary'>Plus de puissance pour plus d'efficacité</Typography>
      <Stack direction="row" spacing={2} paddingTop={5}>
        <Box sx={{ width: '50%', height: 450, borderRadius: '1.5vw 4vw', bgcolor: 'primary.main' }}></Box>
        <Stack width="50%" spacing={2}>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: 'error.main' }}></Box>
          <Box sx={{ width: '100%', height: '50%', borderRadius: '2vw', bgcolor: 'success.main' }}></Box>
        </Stack>
      </Stack>
    </>
  )
}

export default App
