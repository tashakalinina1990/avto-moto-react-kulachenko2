export const ActionType = {
  UPDATE_COMMENTS: `UPDATE_COMMENTS`
}

export const ActionCreator = {
  updateComments: (comments) => ({
    type: ActionType.UPDATE_COMMENTS,
    payload: comments
  })
}