import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0d47a1', color: 'white', py: 4, textAlign: 'center' }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        © {new Date().getFullYear()} D.Y. Patil College of Engineering & Technology, Kolhapur
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Address: Kasaba Bavda, Kolhapur, Maharashtra, India
      </Typography>
    </Box>
  );
}
