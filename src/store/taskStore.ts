import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  loadTasks: () => Promise<void>;
  saveTasks: (tasks: Task[]) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  addTask: (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    const updatedTasks = [...get().tasks, newTask];
    set({ tasks: updatedTasks });
    get().saveTasks(updatedTasks);
  },

  toggleTask: (id: string) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    set({ tasks: updatedTasks });
    get().saveTasks(updatedTasks);
  },

  deleteTask: (id: string) => {
    const updatedTasks = get().tasks.filter((task) => task.id !== id);
    set({ tasks: updatedTasks });
    get().saveTasks(updatedTasks);
  },

  loadTasks: async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        set({ tasks: JSON.parse(storedTasks) });
      }
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  },

  saveTasks: async (tasks: Task[]) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  },
}));
