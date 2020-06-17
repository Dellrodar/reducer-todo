export const todos = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: Date.now()
},
];

export const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'MARK_COMPLETE':
      return state.map((item) =>
      item.id === action.payload
        ? { ...item, completed: !item.completed }
        : item
    );
    case 'CLEAR_COMPLETE':
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}