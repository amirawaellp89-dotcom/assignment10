const html = document.documentElement;
const themeToggleButton = document.getElementById("theme-toggle-button");

themeToggleButton.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
    themeToggleButton.setAttribute("aria-pressed", "true");
    } else {
    themeToggleButton.setAttribute("aria-pressed", "false");
    }
});
const settingsToggle = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
const closeSettings = document.getElementById("close-settings");

settingsToggle.addEventListener("click", () => {
  settingsSidebar.classList.remove("translate-x-full");
  settingsToggle.setAttribute("aria-expanded", "true");
  settingsSidebar.setAttribute("aria-hidden", "false");
});

closeSettings.addEventListener("click", () => {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.setAttribute("aria-expanded", "false");
  settingsSidebar.setAttribute("aria-hidden", "true");
});

const themeColorsGrid = document.getElementById("theme-colors-grid");

const themeColors = [
    {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#ec4899"
    },
    {
        primary: "#3b82f6",
        secondary: "#06b6d4",
        accent: "#14b8a6"
    },
    {
        primary: "#10b981",
        secondary: "#14b8a6",
        accent: "#06b6d4"
    },
    {
        primary: "#f59e0b",
        secondary: "#f97316",
        accent: "#ef4444"
    },
    {
        primary: "#ec4899",
        secondary: "#f43f5e",
        accent: "#a855f7"
    },
    {
        primary: "#8b5cf6",
        secondary: "#6366f1",
        accent: "#3b82f6"
    },
    {
        primary: "#ef4444",
        secondary: "#f97316",
        accent: "#f59e0b"
    },
    {
        primary: "#14b8a6",
        secondary: "#0d9488",
        accent: "#22c55e"
    }
];

themeColors.forEach((theme) => {
    const colorButton = document.createElement("button");

    colorButton.type = "button";

    colorButton.className =
        "w-10 h-10 rounded-full border-2 border-transparent hover:scale-110 transition-transform duration-200";

    colorButton.style.background =
        `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`;

    colorButton.addEventListener("click", () => {
        html.style.setProperty("--color-primary", theme.primary);
        html.style.setProperty("--color-secondary", theme.secondary);
        html.style.setProperty("--color-accent", theme.accent);
    });

    themeColorsGrid.appendChild(colorButton);
});