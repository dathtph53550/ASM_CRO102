// Định nghĩa các action types
export const TOGGLE_THEME_MODE = 'TOGGLE_THEME_MODE';

// Action creator để chuyển đổi giữa light/dark mode
export const toggleThemeMode = () => {
  return {
    type: TOGGLE_THEME_MODE
  };
};
