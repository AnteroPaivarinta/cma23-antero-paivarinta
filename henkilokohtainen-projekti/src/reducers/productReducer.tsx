import { IProduct } from "../types"
const initialState: IProduct[] = [];
const productReducer = (state: IProduct[] = initialState, action: { type: string, payload: IProduct }) => {
    if ( action && action.type === 'NEW_PRODUCT') {
      state.push(action?.payload)
      return state
    }
    return state
}

export default productReducer