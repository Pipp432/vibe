import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
      fontSize: {
      header: '30px',
      subheader: '24px',
      body: '18px',
      'details': '14px',
      },
      keyframes: {
        "fade-in":{
          "0%":{opacity:"0"},
          "100%":{opacity:"1"}
        }
      },
      animation:{
        'spin-slow':'spin 2s linear infinite'
        ,'fade-in':'fade-in 1s linear'
      },
			colors: {
				background: "#F4F4FC",
				primary: "#2F3855",
				secondary: "#8EBAFF",
				success: "#2B773C",
				"success-hover": "#4EBE67",
				error: "#BE3B3B",
				"error-hover": "#E75D5D",
				neutral: "#4F5BC0",
				"neutral-hover": "#737ABE",
				"text-white": "#F4F4FC",
				"text-black": "#000000",
				subTab: "#B0B0B0",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
