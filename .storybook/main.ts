import type { StorybookConfig } from "@storybook/react-vite";
import type { ElectronViteConfig } from "electron-vite";
import type { UserConfig } from "vite";

const config: StorybookConfig = {
    stories: ["../frontend/**/*.mdx", "../frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],

    core: {},

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript",
    },

    async viteFinal(config) {
        const { mergeConfig } = await import("vite");
        const { tsImport } = await import("tsx/esm/api");
        const electronViteConfig = (await tsImport("../electron.vite.config.ts", import.meta.url))
            .default as ElectronViteConfig;
        return mergeConfig(config, electronViteConfig.renderer as UserConfig);
    },

    staticDirs: [{ from: "../assets", to: "/assets" }],
};
export default config;