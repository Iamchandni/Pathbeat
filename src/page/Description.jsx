import React from 'react'
import { Typography } from '@mui/material'
import { movieData } from '../../public/movieData'
import { useParams } from 'react-router-dom'


const Description = () => {
  const { id } = useParams()
  return (
    <main>
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: 'roboto', overflowWrap: 'break-word', marginBottom: '120px', marginLeft: '35%', marginRight: '35%', marginTop: '30px' }}>
        <p style={{ overflowWrap: 'break-word', padding: '2px', margin: '2px', display: 'block', position: 'relative', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'pre-wrap' }}>
          <span style={{ display: 'block', direction: 'rtl', textAlign: 'center', whiteSpace: 'normal' }}>
            {movieData[id - 1].name}
          </span>
        </p>
      </Typography>
      <Typography variant="h6" sx={{fontFamily: 'roboto', overflowWrap: 'break-word', marginLeft: '15%', marginRight: '15%', marginTop: '10px'}}>
        <p style={{ overflowWrap: 'break-word', padding: '2px', margin: '2px', display: 'block', position: 'relative', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'pre-wrap' }}>
          <span style={{ display: 'block', direction: 'ltr', textAlign: 'center', whiteSpace: 'normal' }}>
            {movieData[id - 1].longDescription}
          </span>
        </p>
      </Typography>
      <main>

      </main>
    </main>
  )
}

export default Description
