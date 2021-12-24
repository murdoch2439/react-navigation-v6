import * as tabActionTypes from './tabAction'

const initialState ={
    selectedTab:""
}

const tabReducer = (state :any = initialState, action:any) =>{
      switch (action.type) {
          case tabActionTypes.SET_SELECTED_TAB:
              return {
                  ...state,
                  selectedTab: action.payLoad.selectedTab
              }
          default:
              return state
      }
}

export default tabReducer
