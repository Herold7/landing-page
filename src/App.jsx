
import { useState } from 'react'
import { Stack, Box, Fab, Button, Typography } from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';
import './App.css'

function App() {
  const [templateArea, settemplateArea] = useState({gridTemplateAreas: `'box1 box2''box1 box3'`});

  return (
    <>
      <Typography variant="subtitle1" textTransform={"uppercase"}>
        Caractéristiques
      </Typography>
      <Typography variant="h3" fontWeight={600}>
        Plus de puissance pour plus d'efficacité
      </Typography>
      <Stack className="box-container"  marginTop={5} style={templateArea}>
        {/* box 1 */}
        <Box className="box1" sx={{ bgcolor: "info.main", position: 'relative' }}>
          <Fab color="info.light" aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>
        {/* box 2 */}
        <Box className="box2" sx={{ bgcolor: "secondary.main", position: 'relative' }}>
          <Fab color="info.light" aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>
        {/* box 3 */}
        <Box className="box3" sx={{ bgcolor: "success.main", position: 'relative' }}>
          <Fab color="info.light" aria-label="add" sx={{ position: 'absolute', bottom: '5%', right: '5%', }}>
            <AddIcon />
          </Fab>
        </Box>
      </Stack>
    </>
  )
}

export default App
