import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("./src", import.meta.url)),
			},
		],
	},
	server: {
		port: 3000,
	},
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
