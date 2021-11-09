export const      SET_SELECTED_TAB  = 'SET_SELECTED_TAB'

export const setSelectedTabSuccess  = (selectedTab:any) => ({type: SET_SELECTED_TAB,
    payLoad:{selectedTab}})



export function setSelectedTab (selectedTab:any){
    return (dispatch:any) =>{
        dispatch(setSelectedTabSuccess(selectedTab))
    }
}
