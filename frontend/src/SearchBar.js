import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import { connect } from 'react-redux'
import * as R from 'ramda'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

function SearchBar({ changeImages }) {
  const classes = useStyles()

  const fetchImages = async (q) => {
    const response = await axios.get(`/api/query/${q}`)
    changeImages(R.pathOr([], ['data', 'images'], response))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="input-field"
        label="Your query"
        onChange={(event) => fetchImages(event.target.value)}
      />
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  changeImages: (images) => {
    dispatch({
      type: 'IMG_CHANGE',
      images,
    })
  },
})
SearchBar = connect(null, mapDispatchToProps)(SearchBar)
export default SearchBar
