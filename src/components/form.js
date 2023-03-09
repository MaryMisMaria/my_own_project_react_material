import { useRef, useState } from 'react'
// material
import { Box, Button, TextField } from '@mui/material'

export const FormList = () => {
  const inputRef = useRef(null)
  const [name, setName] = useState('')

  return (
    <Box
      sx={{
        mt: 10,
        width: '50%',
        height: '150px',
        fontSize: '1rem',
        padding: '13px 20px',
        borderRadius: '10px',
        backgroundColor: '#eee',
      }}
    >
      <TextField
        fullWidth
        value={name}
        label='tasks'
        ref={inputRef}
        sx={{ mt: 1 }}
        variant='outlined'
        placeholder='Enter New Task'
        InputLabelProps={{ shrink: true }}
        onChange={(e) => setName(e.target.value)}
      />
      <Box width='100%' display='flex' justifyContent='center'>
        <Button variant='contained' type='submit' sx={{ mt: 5, width: 200 }}>Add</Button>
      </Box>
    </Box>
  )
}

export default FormList
