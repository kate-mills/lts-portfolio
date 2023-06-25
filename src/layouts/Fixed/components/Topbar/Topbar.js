import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {alpha, useTheme} from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from 'svg/Logo'

import Link from 'components/Link'
import ThemeModeToggler from 'components/ThemeModeToggler'

const Topbar = ({onSidebarOpen}) => {
  const {
    palette: {divider}
  } = useTheme()
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
      <Box display={'flex'} component={Link} to="/" title="Kate Mills Portfolio" width={{xs: 100, md: 120}}>
        <Box component={Logo} />
      </Box>
      <Box sx={{display: {xs: 'none', md: 'flex'}}} alignItems={'center'}>
        <Box marginLeft={3}>
          <Link underline="none" to="/" color="text.secondary">
            Home
          </Link>
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button variant="contained" color="primary" component={Link} to="/contact" size="med">
            Contact Me
          </Button>
        </Box>
      </Box>
      <Box sx={{display: {xs: 'flex', md: 'none'}}} alignItems={'center'}>
        <Box marginRight={1}>
          <ThemeModeToggler />{' '}
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(divider, 0.2)
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func
}

export default Topbar
