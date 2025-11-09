import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: 'url("https://cache.careers360.mobi/media/colleges/reviews/2021/6/1/161645/IMG-20191109-WA0015.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}
    >
      {/* Overlay for better readability */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: 'rgba(0,0,0,0.5)'
      }} />
      
      <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to D.Y. Patil College
        </Typography>
        <Typography variant="h5" gutterBottom>
          Excellence in Engineering & Technology, Kolhapur
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
          Apply Now
        </Button>
      </Box>
    </Box>
  );
}
