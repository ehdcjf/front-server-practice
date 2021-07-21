

// reducer는 결국 상태를 바꿔야 하기떄문에 
// 이전 상태값을 가져와야함.
// dispatch 바꿀정보를 받아야함 -> action
// 결국 앤 리턴을해주는데 무엇을 리턴하냐 state값 
const reducer = (state,action) => {
    switch(action.type){
        case "GET_COMMENT": //최초실행했을 때
       
           return{
               ...state,
               loadding:true,
           }
        
        case "GET_COMMENT_SUCCESS":

            return{
                ...state,
                loadding:false, 
               commentItem:action.payload
            }

        case "GET_COMMENT_ERROR":
            return{
                ...state,
                loadding:false, 
                error:action.payload
            }
        case "CREATE":
            return {
                ...state,
                commentItem:[...state.commentItem,action.payload]
            }
        
        case "CREATE_COMMENT_SUCCESS":
            return {
                ...state,
                commentItem:[]
            }

        case "CREATE_COMMENT_ERROR": 

            return{ 

            }


        case "UPDATE_SUCCESS":
            confirm(action.payload.data.msg)
            let newcontent = action.payload.content;
            let index = action.payload.location;
            let {commentItem} = {...state}; 
            commentItem[index].content = newcontent; 
            commentItem[index].date += `(수정됨)`; 
            return {
                ...state,
                commentItem:[...commentItem]
            }

        case "UPDATE_ERROR":
            confirm(action.payload.data.msg)
            return {
                state
            }

        
        case "DELETE_SUCCESS":
            confirm(action.payload.data.msg)
            let newArr = [...state.commentItem].filter((_,i)=> 
                i !== action.payload.location
            );
            return {
                ...state,
                commentItem:newArr,
            }
        case "DELETE_ERROR":
            confirm(action.payload.data.msg)
            
            return {
                state
            }
            
        default:
            return state
    }
}

export default reducer 