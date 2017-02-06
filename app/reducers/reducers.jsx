var uuid = require('node-uuid');
import moment from 'moment';

export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
    var item = {
      createdAt: moment().unix(),
      id: uuid(),
      text: action.text,
    }
      return [
        ...state,
        item
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
