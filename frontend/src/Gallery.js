import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ImageCard from './ImageCard'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function Gallery({ images }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {images.map(({ image }, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
const mapState = ({ images }) => ({
  images,
})
Gallery = connect(mapState, null)(Gallery)
export default Gallery
