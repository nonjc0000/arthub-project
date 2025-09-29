import React, { createContext, useContext, useState, useEffect } from 'react';

// 創建 Context
const AuthContext = createContext();

// 自定義 Hook 方便使用
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必須在 AuthProvider 內使用');
  }
  return context;
};

// AuthProvider 組件
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 從 localStorage 恢復登入狀態
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('無法解析用戶資料:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // 登入函數
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // 登出函數
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // 更新用戶資料
  const updateUser = (newData) => {
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,           // 當前用戶資料
    isLoading,      // 載入狀態
    isLoggedIn: !!user,  // 是否已登入
    login,          // 登入函數
    logout,         // 登出函數
    updateUser      // 更新用戶資料函數
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};