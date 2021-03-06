import {
  EDITED,
  UPLOAD,
  UPDATE_TIMES,
  CHANGE_CURRENT_INDEX,
  INIT_TIMES,
} from '../enum/lyrics'

export default function lyricsEditReducer(preState = {}, action) {
  let newState = {
    ...preState,
  }
  switch (action.type) {
    case EDITED:
      newState.edited = action.edited
      return newState
    case UPLOAD:
      newState.uploaded = action.uploaded
      return newState
    case UPDATE_TIMES:
      let index = action.index
      newState.times[index] = action.time
      return newState
    case INIT_TIMES:
      newState.times = action.times
      return newState
    case CHANGE_CURRENT_INDEX:
      newState.currentIndex = action.currentIndex
      return newState
    default:
      return preState
  }
}
