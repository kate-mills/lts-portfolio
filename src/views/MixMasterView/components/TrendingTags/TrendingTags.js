import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Container from 'components/Container'

import {UseMixMasterContext} from 'context/mixmaster'

const TrendingTags = ({inputValue = ''}) => {
  const {
    state: {trending, query},
    updateQueryString
  } = UseMixMasterContext()

  const [qStr, setQStr] = React.useState(inputValue)

  React.useEffect(() => {
    setQStr(query)
  }, [query])
  return (
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      flexWrap="wrap"
      alignItems={'baseline'}
      data-aos="fade"
      data-aos-duration="3000"
    >
      <Typography component={'p'} variant="body2" align="left">
        Trending:{' '}
      </Typography>
      {[...trending].map((title, i) => {
        let isQueryMatch = title.toLowerCase() === query.toLowerCase()
        return (
          <Chip
            size={'small'}
            color={'primary'}
            variant={'filled'}
            key={`${title}-${i}`}
            onClick={(e) => updateQueryString(title)}
            label={title}
            sx={{marginBottom: 1, marginRight: 1, verticalAlign: 'middle'}}
            disabled={isQueryMatch}
          />
        )
      })}
    </Stack>
  )
}

export default TrendingTags
