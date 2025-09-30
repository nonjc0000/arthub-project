import { useEffect, useState } from 'react';
import '../sass/components/_CustomCursor.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // 更新游標位置
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // 檢測是否懸停在可點擊元素上
    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <img src="/images/cursor.gif" alt="cursor" />
    </div>
  );
};

export default CustomCursor;