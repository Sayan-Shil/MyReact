export const fetchPostsRequest = () => (
    {
        type: "FETCH_POST_REQUEST",

    }
);


export const fetchPostsSucess = (posts) => (
    {
        type: "FETCH_POST_SUCCESS",
        payload: posts

    }
);

export const fetchPostsFailure = (error) => (
    {
        type: "FETCH_POST_FAILURE",
        payload: error


    }
);

export const fetchPosts =() => async (dispatch) => {
    //Dispatch the fetch posts
    dispatch(fetchPostsRequest())
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
         //Dispatch fetch success
          dispatch(fetchPostsSucess(data))

    } catch(error){
         // Dispatch fetch failure
          dispatch(fetchPostsFailure(error.message))
    }
   
}



