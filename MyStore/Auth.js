import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      
      login: (userData, token) => {
        set({ user: userData, token });
      },
      
      logout: () => {
        set({ user: null, token: null });
      },
      
      updateUser: (userData) => {
        set((state) => ({ user: { ...state.user, ...userData } }));
      }
    }),
    {
      name: 'user-auth',
    }
  )
);

export default userAuth;
