
const user="USER";

export const UserAction=(data)=>{
    return (dispatch)=>{
        dispatch({
            type:user,
            payload:data
        })
    }
}