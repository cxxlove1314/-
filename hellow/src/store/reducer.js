

import { combineReducers } from 'redux' 
import Chen from './Chen/reducer'
import LaoWang from './Chen/reducer'

const reducer = combineReducers({
    Chen,LaoWang
})

export default reducer