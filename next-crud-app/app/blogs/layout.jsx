"use client"

import { Box, Button, Typography } from "@mui/material"

export default function Blogs({ children }) {
  return (
    <Box>

      <Typography variant="outlined"> This is the blog layout (Stable)</Typography>
      {children}
      <Button variant="contained">Blog Layout Footer</Button>
    </Box>
  )
}
