const defaultState = {
  images: [],
}
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      state = {
        ...state,
        images: action.images || [],
      }
      break
  }
  return state
}
