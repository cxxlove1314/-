

import { combineReducers } from 'redux' 
import Chen from './Chen/reducer'
import LaoWang from './LaoWang/reducer'

const reducer = combineReducers({
    Chen,LaoWang
})

export default reducer