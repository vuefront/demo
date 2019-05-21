export const state = () => ({
  test: '123'
})

export const getters = {
  value(state) {
    return state.test
  }
}
