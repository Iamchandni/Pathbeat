import React from 'react'
import '../App.css'
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { movieData } from '../../public/movieData';

const Home = () => {
    return (
        <main>
            <Typography variant="h4" sx={{ backgroundColor: 'white[300]', marginLeft: '42%', fontWeight: 'bold', fontFamily: 'roboto', overflowWrap: 'break-word', marginBottom: '140px' }} noWrap={false} width={300} flexShrink={1}>
                Movie Homepage
            </Typography>
            {movieData.map((item) => (
                <main key={item.Id}>
                    <Box sx={{ display: 'flex', marginLeft: '32%', marginBottom: '20px', width: '600px' }}>
                        <Box sx={{ display: 'block' }}>
                            <Typography sx={{ color: 'white', fontFamily: 'roboto', overflowWrap: 'break-word', width: '120px' }}>
                                {item.name}
                            </Typography>
                            <Link to={`/Description/${item.Id}`}>
                                <Avatar sx={{ color: 'black', width: 80, height: 80, marginLeft: '4px' }} variant="square">
                                    <img src={item.image} alt={item.name} width="100px" height="100px" />
                                </Avatar>
                            </Link>
                        </Box>
                        <Box sx={{ width: '380px', maxHeight: '500px', minHeight: '100px', marginLeft: '40px', marginTop: '20px', marginBottom: '20px', backgroundColor: 'black' }}>
                            <Typography sx={{ marginTop: '5px', marginLeft: '5px', marginRight: '5px', color: 'black', fontFamily: 'roboto', overflowWrap: 'break-word', border: '1px solid black', background: 'white' }}>
                                {item.shortDescription}
                            </Typography>
                        </Box>
                    </Box>
                    {item.Id!==20 && <hr style={{ width: '40%', marginLeft: '32%' }} />}
                </main>))}
        </main>
    )
}

export default Home
