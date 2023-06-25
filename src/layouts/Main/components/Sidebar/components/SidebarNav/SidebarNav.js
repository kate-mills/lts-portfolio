import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Link from 'components/Link'
import Logo from 'svg/Logo'

import NavItem from './components/NavItem'

const SidebarNav = ({pages}) => {
  const {landings: landingPages, apps: appsPages} = pages

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box display={'flex'} component={Link} to="/" title="kateMills" width={{xs: 100, md: 120}}>
          <Box component={Logo} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Apps'} items={appsPages} />
        </Box>
        <Box marginTop={2}>
          <Button size={'large'} variant="outlined" fullWidth component={Link} to="/">
            Docs
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button size={'large'} variant="contained" color="primary" fullWidth component={Link} to="/contact">
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired
}

export default SidebarNav
