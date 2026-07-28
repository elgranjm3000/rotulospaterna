import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#f8f9ff",
          dim: "#cbdbf5",
          bright: "#f8f9ff",
          "container-lowest": "#ffffff",
          "container-low": "#eff4ff",
          container: "#e5eeff",
          "container-high": "#dce9ff",
          "container-highest": "#d3e4fe",
          tint: "#565e74",
        },
        "on-surface": {
          DEFAULT: "#0b1c30",
          variant: "#45464d",
        },
        "inverse-surface": "#213145",
        "inverse-on-surface": "#eaf1ff",
        outline: {
          DEFAULT: "#76777d",
          variant: "#c6c6cd",
        },
        primary: {
          DEFAULT: "#000000",
          on: "#ffffff",
          container: "#131b2e",
          "on-container": "#7c839b",
          fixed: "#dae2fd",
          "fixed-dim": "#bec6e0",
          "on-fixed": "#131b2e",
          "on-fixed-variant": "#3f465c",
          inverse: "#bec6e0",
        },
        secondary: {
          DEFAULT: "#855300",
          on: "#ffffff",
          container: "#fea619",
          "on-container": "#684000",
          fixed: "#ffddb8",
          "fixed-dim": "#ffb95f",
          "on-fixed": "#2a1700",
          "on-fixed-variant": "#653e00",
        },
        tertiary: {
          DEFAULT: "#000000",
          on: "#ffffff",
          container: "#00201d",
          "on-container": "#0c9488",
          fixed: "#89f5e7",
          "fixed-dim": "#6bd8cb",
          "on-fixed": "#00201d",
          "on-fixed-variant": "#005049",
        },
        error: {
          DEFAULT: "#ba1a1a",
          on: "#ffffff",
          container: "#ffdad6",
          "on-container": "#93000a",
        },
        background: {
          DEFAULT: "#f8f9ff",
          on: "#0b1c30",
        },
        "surface-variant": "#d3e4fe",
      },
      spacing: {
        "container-max": "1280px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        unit: "8px",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
