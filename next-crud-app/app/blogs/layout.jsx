"use client"

import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Blogs({ children }) {
  const router = useRouter(); 
  
  return (
    <Box>

      <Typography variant="outlined"> This is the blog layout (Stable)</Typography>
      {children}
      <Button variant="contained" onClick={() => router.push('/login')}>Blog Layout Footer</Button>
    </Box>
  )
}