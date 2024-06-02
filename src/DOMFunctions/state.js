let state = null;

function getState() {
  return state
}

function setState(newState) {
  state = newState;
}

export { getState, setState };
