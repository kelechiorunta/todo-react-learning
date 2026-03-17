import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Table,
  Text,
  TextField
} from '@radix-ui/themes';
import taskReducer, { type Task } from './TodoReducer';
import { useContext, useReducer, useState } from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { UserCtx } from '../UserContext/usercontext';

const initialState: Task[] = [
  {
    name: 'Kelechi',
    task: 'Training on React',
    id: 0
  }
];

function Tasker({
  task,
  deleteTask
 
}: {
  task: Task;
  deleteTask: (task: Task) => void;

}) {
  return (
    <Table.Body>
      <Table.Row>
        <Table.RowHeaderCell>{task.id}</Table.RowHeaderCell>
        <Table.Cell>{task.name}</Table.Cell>
        <Table.Cell>{task.task}</Table.Cell>
        <Table.Cell>
          <IconButton onClick={() => deleteTask(task)}>
            <TrashIcon width="18" height="18" />
          </IconButton>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
export default function Todo() {
  // Since it is a hook, it must always be passed at the top of the child component
  const username = useContext<string>(UserCtx);
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [todo, setTodo] = useState<Task>({ name: '', id: 0, task: '' });

  const [error, setError] = useState('');

  const updateTask = () => {
    /** Handling logic using useState setter functions **/
    setTodo({ ...todo, name: 'Kelechi' });
  };

  const addTask = (newtask: Task) => {
    try {
      dispatch({ type: 'added', updatedtask: newtask });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setError('Failed to add task');
    }
  };

  const deleteTask = (task: Task) => {
    try {
      dispatch({ type: 'deleted', updatedtask: task });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setError('Failed to delete task');
    }
  };

  const editTask = (task: Task) => {
    try {
      dispatch({ type: 'edited', updatedtask: task });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setError('Failed to update task');
    }
  };

  if (!tasks || tasks.length <= 0) {
    return <Text>{error}</Text>;
  }

  return (
    <Flex direction={'column'} gap={'2'} p={'2'} width={'90%'}>
      <Container p={'2'} width={'90%'}>
        <Heading>Todo List</Heading>
        <Heading size={'3'}>{todo.name}</Heading>
        <Heading size={'3'}>{username}</Heading>
        <Flex direction={'column'} gap={'2'}>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Todo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            {tasks.length > 0 &&
              tasks.map((t: Task, indx: number) => (
                <Tasker key={indx} task={t} deleteTask={deleteTask} />
              ))}
          </Table.Root>
        </Flex>
        <TextField.Root
          placeholder="Enter ID"
          name="id"
          type="number"
          min={0}
          defaultValue={todo.id}
          onChange={(e) => setTodo({ ...todo, id: Number(e.target.value) })}
        >
          <TextField.Slot />
        </TextField.Root>
        <TextField.Root
          placeholder="Enter name"
          name="name"
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        >
          <TextField.Slot />
        </TextField.Root>
        <TextField.Root
          placeholder="Enter Todo"
          name="task"
          type="text"
          value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        >
          <TextField.Slot />
        </TextField.Root>
        <Flex gap={'2'} my={'2'}>
          {' '}
          <Button radius="small" onClick={() => addTask(todo)}>
            Add Todo
          </Button>
          <Button radius="small" onClick={() => editTask(todo)}>
            Edit Todo
          </Button>
          <Button radius="small" onClick={() => updateTask()}>
            UpdateTodoName
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
}
