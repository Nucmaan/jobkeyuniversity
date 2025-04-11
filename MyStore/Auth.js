import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userAuth = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      
      login: (userData, tokens) => {
        set({ 
          user: userData,
          accessToken: tokens?.accessToken || null,
          refreshToken: tokens?.refreshToken || null,
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        set({ 
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false 
        });
      },
      
      updateUser: (userData) => {
        set((state) => ({ 
          user: { ...state.user, ...userData } 
        }));
      },

      getAccessToken: () => {
        const state = userAuth.getState();
        return state.accessToken;
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
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default userAuth;
