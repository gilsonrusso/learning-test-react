import SearchAppBar from '@/components/ui/Appbar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <Box overflow="hidden">
      <SearchAppBar />
      <Outlet />
    </Box>
  )
}

export default AppLayout
