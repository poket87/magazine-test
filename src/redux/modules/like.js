// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { firestore, storage } from "../../shared/firebase";
// import moment from "moment";

// import firebase from "firebase/app";

// import { actionCreators as postActions } from "./post";

// const SET_LIKE = "SET_LIKE";
// const ADD_LIKE = "ADD_LIKE";
// const DELETE_LIKE = "DELETE_LIKE";

// const setLike = createAction(SET_LIKE, (post) => ({ post }));
// const addLike = createAction(ADD_LIKE, (post) => ({ post }));
// const deleteLike = createAction(DELETE_LIKE, (post) => ({ post }));

// const initialLike = {
//     list: {},
// };

// // middlewares
// const addLikeFB = () => {
//     return function (dispatch, getState, {history}){
//         const likeDB = firestore.collection("like");
//         const user_info = getState().user.user;

//         let like = {
//             user_name: user_info.user_name,
//             post_id: post_id,
//             user_id: user_info.uid,
//             insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
//         };

//         likeDB.add(like).then((doc) => {
//             const postDB = firestore.collection("post");

//             const post = getState().post.list.find((l) => l.id === post_id);

//         })
//     }
// }

// export default handleActions (
//     {
//         [SET_LIKE]: (state, action) =>
//         produce(state, (draft) => {

//         }),

//         [ADD_LIKE]: (state, action) => produce(state, (draft) => {

//         }),

//         [DELETE_LIKE]: (state, action) => produce(state, (draft) => {

//         }),
//     },
//     initialLike
// );

// const actionCreators = {
//     addLikeFB,
// };

// export {actionCreators};
