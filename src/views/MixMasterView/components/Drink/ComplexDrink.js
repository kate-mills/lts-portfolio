import * as React from 'react'
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ExpandMore = styled((props) => {
  const {expand, ...other} = props
  return <IconButton {...other} />
})(({theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))


export default function RecipeReviewCard({item = {}}) {
  console.log(item)
  const [expanded, setExpanded] = React.useState(false)

  const ingredients = [
    {title: item.strIngredient1, amount: item.strMeasure1},
    {title: item.strIngredient2, amount: item.strMeasure2},
    {title: item.strIngredient3, amount: item.strMeasure3},
    {title: item.strIngredient4, amount: item.strMeasure4},
    {title: item.strIngredient5, amount: item.strMeasure5},
    {title: item.strIngredient6, amount: item.strMeasure6},
    {title: item.strIngredient7, amount: item.strMeasure7},
    {title: item.strIngredient8, amount: item.strMeasure8},
    {title: item.strIngredient9, amount: item.strMeasure9},
    {title: item.strIngredient10, amount: item.strMeasure10},
    {title: item.strIngredient11, amount: item.strMeasure11},
    {title: item.strIngredient12, amount: item.strMeasure12},
    {title: item.strIngredient13, amount: item.strMeasure13},
    {title: item.strIngredient14, amount: item.strMeasure14},
    {title: item.strIngredient15, amount: item.strMeasure15}
  ]

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: '#FD5523'}} aria-label="recipe">
            {item.strDrink[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.strDrink}
        subheader={item.strGlass}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.strDrinkThumb}
        sx={{
          position: 'relative',
          height: 320,
          overflow: 'hidden'
        }}
        alt={item.strDrink}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.strAlcoholic}
          {item.strTags}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            {ingredients.map((ing) => {
              return (
                <Typography key={ing.title}>
                  {ing.title} {ing.amount}
                </Typography>
              )
            })}
          </Typography>

          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph>{item.strInstructions}</Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
