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
    case 'DELETE_ITEM':
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state.splice(i, 1);
        };
      };
      return [...state];
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
    default:
      return state;
  };
};
