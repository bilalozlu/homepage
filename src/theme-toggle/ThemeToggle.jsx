import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
      <button className="theme-toggle" onClick={toggleTheme}>
        {"◐"}
      </button>
  );
}