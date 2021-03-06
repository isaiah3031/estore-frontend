import {combineReducers} from 'redux';
import UsersReducer from './users_reducer'
import ProductReducer from './product_reducer'
import ReviewReducer from './review_reducer'
import CartReducer from './cart_reducer'
import SearchTermReducer from './search_term_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  products: ProductReducer,
  reviews: ReviewReducer,
  cart: CartReducer,
  searchTerms: SearchTermReducer
})

export default entitiesReducer;