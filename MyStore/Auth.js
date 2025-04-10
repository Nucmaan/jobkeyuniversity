import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: (userData, token) => {
        set({ 
          user: userData, 
          token: token,
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        set({ 
          user: null, 
          token: null,
          isAuthenticated: false 
        });
       
        localStorage.removeItem('refreshToken');
      },
      
      updateUser: (userData) => {
        set((state) => ({ 
          user: { ...state.user, ...userData } 
        }));
      },

      isAdmin: () => {
        const state = userAuth.getState();
        return state.user?.role === 'admin';
      }
    }),
    {
      name: 'user-auth',
       partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default userAuth;
