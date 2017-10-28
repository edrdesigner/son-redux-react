import * as ActionTypes from './../actions/ActionTypes'

//export default (state = { value: 0}, action) =>  {
export default (state = 0, action) =>  {
    switch(action.type) {
        case ActionTypes.ON_INCREMENT:
            // let valueInc =  action.payload.value

            // if (valueInc === undefined) {
            //     valueInc  = 0;
            // }

            // return Object.assign({}, state, {value: valueInc + 1})
            return state + 1
        break;

        case ActionTypes.ON_DECREMENT:
            // let valueDesc =  action.payload.value

            // if (valueDesc === undefined) {
            //     valueInc  = 0;
            // }
            // return Object.assign({}, state, {value: valueDesc - 1})
            return state - 1
        break;

        default:
            return state;
    }
}