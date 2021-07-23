/*

*/

const getComment = async (dispatch) => {
  dispatch({ type: 'GET_COMMENT' })
  try {
    const response = await fetch('http://3.21.50.229/api/comment')
    const data = await response.json()

    
    dispatch({ type: 'GET_COMMENT_SUCCESS', payload: data })
  } catch (e) {
    dispatch({ type: 'GET_COMMENT_ERROR', payload: e })
  }
}

const createComment = async (dispatch, payload) => {

  const { userid, content } = payload;
  let url = 'http://3.21.50.229/api/comment'
  let options = {
    method: 'POST',
    // mode:'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      userid,
      content
    }),
  }
  let response = await fetch(url, options)

    let data = await response.json();
    dispatch({ type: 'CREATE', payload: data })
}











const deleteComment = async (dispatch, payload) => {
  const { index, location } = payload;
  let url = 'http://3.21.50.229/api/comment'
  let options = {
    method: 'delete',
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      index
    }),
  }
  const response = await fetch(url, options);
  const data = await response.json(); 

  payload.data = data; 
  if(data.result==='SUCCESS'){ 
    dispatch({ type: 'DELETE_SUCCESS', payload: payload })
  }else{ 
    dispatch({ type: 'DELETE_ERROR', payload: payload })
  }
}

const updateComment = async (dispatch, payload) => {
  const { index, location, content } = payload;
  let url = 'http://3.21.50.229/api/comment'
  let options = {
    method: 'PATCH',
    // mode:'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      index, content
    }),
  }

  let response = await fetch(url, options);
  const data = await response.json(); 
  payload.data = data; 
  if(data.result==='SUCCESS'){ 
    dispatch({ type: 'UPDATE_SUCCESS', payload: payload })
  }else{ 
    dispatch({ type: 'UPDATE_ERROR', payload: payload })
  }

  dispatch({
    type: 'UPDATE',
    payload: {
      location,
      content,
    }
  })
}







const postComment = async (dispatch) => { 
  dispatch({type:'POST_COMMENT'})
  try{ 
    const options = { 
      method:'POST', 
      headers:{ 
        'Content-type' : 'application/json; charser=utf-8'
      }, 
      body:JSON.stringify({userid:'king',content:'aaa'})
    }

      const response = await fetch('http://3.138.34.208/api/comment')
      const data = await response.json()

    dispatch({type:'POST_COMMENT_SUCCESS',payload:data})
  }catch(e){ 
    dispatch({type:'POST_COMMENT_ERROR',payload:e})
  }
}




module.exports = {
  getComment,
  createComment,
  deleteComment,
  updateComment,


  postComment,

}