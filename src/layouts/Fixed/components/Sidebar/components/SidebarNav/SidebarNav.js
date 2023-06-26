import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {alpha, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'components/Link'

const SidebarNav = ({pages, onClose}) => {
  const theme = useTheme()
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '')
  }, [])

  return (
    <Box paddingBottom={2}>
      <Box justifyContent={'flex-end'} onClick={() => onClose()} display={{xs: 'flex', md: 'none'}}>
        <CloseIcon fontSize="small" />
      </Box>
      <Box paddingX={2}>
        {pages.map((item, i) => (
          <Box key={i} marginBottom={3}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 1,
                display: 'block'
              }}
            >
              {item.groupTitle}
            </Typography>
            <Box>
              {item.pages.map((p, i) => {
                const {title, isLocal, href} = p
                return isLocal ? (
                  <Box marginBottom={1 / 2} key={i}>
                    <Button
                      component={Link}
                      to={href}
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: activeLink === href ? theme.palette.primary.main : theme.palette.text.primary,
                        backgroundColor: activeLink === href ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                        fontWeight: activeLink === href ? 600 : 400
                      }}
                    >
                      {title}
                    </Button>
                  </Box>
                ) : (
                  <Box marginBottom={1 / 2} key={i}>
                    <Button
                      component={'a'}
                      href={href}
                      target="_blank"
                      fullWidth
                      sx={{
                        justifyContent: 'flex-start',
                        color: theme.palette.text.primary,
                        backgroundColor: 'transparent',
                        fontWeight: 400
                      }}
                    >
                      {title}
                    </Button>
                  </Box>
                )
              })}
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Button variant="outlined" fullWidth component={Link} to="/">
          Home
        </Button>
      </Box>
      <Box marginTop={1}>
        <Button variant="contained" color="primary" fullWidth component={Link} to="/contact">
          Contact Me
        </Button>
      </Box>
    </Box>
  )
}

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func
}

export default SidebarNav
