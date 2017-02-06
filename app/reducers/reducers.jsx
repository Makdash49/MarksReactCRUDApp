export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    // case 'UPDATE_TODO':
    //   return state.map((todo) => {
    //     if (todo.id === action.id) {
    //       return {
    //         ...todo,
    //         ...action.updates
    //       };
    //     } else {
    //       return todo;
    //     }
    //   });
    // case 'ADD_TODOS':
    //   return [
    //     ...state,
    //     ...action.todos
    //   ];
    // case 'LOGOUT':
    //   return [];
    default:
      return state;
  };
};
