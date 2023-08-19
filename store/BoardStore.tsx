import { create } from 'zustand';
import { getTodosByColumn } from '@/lib/getTodosByColumn';

interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>()
  },
  getBoard: async () => {
    const board = await getTodosByColumn();

    set({ board });
  }
}));
