// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     // Agar pehle se theme save hai to woh lagao
//     const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     } else {
//       // Default light
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="border px-4 py-2 rounded"
//     >
//       {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//     </button>
//   );
// }
