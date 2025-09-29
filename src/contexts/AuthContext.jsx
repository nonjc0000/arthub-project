import React, { createContext, useContext, useState, useEffect } from 'react';

// 創建 Context
const AuthContext = createContext(null);

// 自定義 Hook 方便使用
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必須在 AuthProvider 內使用');
  }
  return context;
};

// Provider 組件
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 從 localStorage 讀取已登入的用戶資訊（頁面重新整理時恢復狀態）
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('讀取用戶資訊失敗:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // 登入函數
  const login = (userData) => {
    const userInfo = {
      name: userData.name || userData.email.split('@')[0],
      email: userData.email,
      avatar: userData.avatar || './images/blog/avatar.svg',
      loginTime: new Date().toISOString()
    };
    
    setUser(userInfo);
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  // 登出函數
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // 更新用戶資訊
  const updateUser = (newUserData) => {
    const updatedUser = { ...user, ...newUserData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // 檢查是否已登入
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,           // 當前用戶資訊
    isLoading,      // 載入狀態
    login,          // 登入函數
    logout,         // 登出函數
    updateUser,     // 更新用戶資訊
    isAuthenticated // 檢查是否已登入
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};