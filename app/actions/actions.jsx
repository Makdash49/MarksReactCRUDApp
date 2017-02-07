export var addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  };
};

export var deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    id
  }
}
