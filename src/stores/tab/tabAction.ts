export const SET_SELECTED_TAB : string  = 'SET_SELECTED_TAB'

export const setSelectedTabSuccess  = (selectedTab:string) => (
    {type: SET_SELECTED_TAB, payLoad:{selectedTab}}
    )


export function setSelectedTab (selectedTab:string){
    return (dispatch:any) =>{
        dispatch(setSelectedTabSuccess(selectedTab))
    }
}
