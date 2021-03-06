var prevGameState = undefined
var currGameState = undefined

module.exports.changeGameState = (nextGameState) => {
    console.log('change gamestate from ', currGameState, 'to', nextGameState)
    if (prevGameState) {
        prevGameState.end()
    }
    prevGameState = currGameState
    nextGameState.start()
    currGameState = nextGameState
}

module.exports.update = (deltaTime) => {
    currGameState.update(deltaTime)
}

module.exports.getCurrGameState = () => { return currGameState }
