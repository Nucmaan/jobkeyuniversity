import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userAuth = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      
      login: (userData) => {
        set({ 
          user: {
            id: userData.id,
            full_name: userData.full_name,
            email: userData.email,
            role: userData.role,
            mobile: userData.mobile,
            avatar: userData.avatar,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
          },
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        set({ 
          user: null,
          isAuthenticated: false 
        });
      },
      
      updateUser: (userData) => {
        set((state) => ({ 
          user: { ...state.user, ...userData } 
        }));
      },

      getUser: () => {
        const state = userAuth.getState();
        return state.user;
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
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default userAuth;
