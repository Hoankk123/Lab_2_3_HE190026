import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Nạp dữ liệu khi ứng dụng khởi chạy
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Lưu dữ liệu mỗi khi state thay đổi
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Lỗi khi lưu Local Storage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}