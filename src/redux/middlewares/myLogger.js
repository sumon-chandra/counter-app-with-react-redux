const myLogger = (state) => (next) => (action) => {
    console.log(`Before: ${JSON.stringify(store.getState)}`);
    console.log(`Action: ${JSON.stringify(action)}`);
    const upcomingState = [action].reduce(rootReducer, store.getState)
    console.log(`Upcoming: ${JSON.stringify(upcomingState)}`);
    return next(action);
}
export default myLogger