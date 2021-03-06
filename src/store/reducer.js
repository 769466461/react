let reducer = (state,action) => {

  let {type,payload} = action;

  switch (type) {

    case 'VIEW_LOADING' :
      return Object.assign({},state,{bLoading: payload });

    case 'VIEW_HEADER' :
      return Object.assign({},state,{bHeader: payload });

    case 'VIEW_FOOTER' :
      return Object.assign({},state,{bFooter: payload });

    case 'UPDATE_HOME' :
      return Object.assign({},state,{home: payload });

    case 'UPDATE_FOLLOW' :
      return Object.assign({},state,{follow: payload });

    case 'UPDATE_COLUMN' :
      return Object.assign({},state,{column: payload });

    case 'UPDATE_DETAIL' :
      return Object.assign({},state,{detail: payload });

    case 'UPDATE_BANNER' :
      return Object.assign({},state,{banner: payload });

    case 'UPDATE_USER' :
      return Object.assign({},state,{user: payload });


    default:
      return state
  }
};

export default reducer;