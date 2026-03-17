export interface Task {
  name: string;
  task: string;
  id: number;
}

export interface Action {
  type: string;
  updatedtask: Task;
}

/** taskReducer is simply a reducer function which is a pure function that should return
 * predictable state objects from predictable actions
 */

const taskReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        { name: action.updatedtask.name, task: action.updatedtask.task, id: action.updatedtask.id }
      ];
    }
    case 'deleted': {
      return state.filter((s) => s.id !== action.updatedtask.id);
    }
    case 'edited': {
      return state.map((todos) => {
        if (todos.id === action.updatedtask.id) {
          return action.updatedtask;
        }
        return todos;
      });
    }
    default: {
      throw new Error(`${action.type} is not a registered action`);
    }
  }
};

export default taskReducer;
