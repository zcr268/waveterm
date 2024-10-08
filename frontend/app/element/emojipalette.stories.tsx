import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { EmojiPalette } from "./emojipalette";

const meta: Meta<typeof EmojiPalette> = {
    title: "Elements/EmojiPalette",
    component: EmojiPalette,
    args: {
        className: "custom-emoji-palette-class",
    },
    argTypes: {
        scopeRef: {
            description: "Reference to the outer container element for positioning",
        },
        className: {
            description: "Custom class for emoji palette styling",
        },
    },
};

export default meta;
type Story = StoryObj<typeof EmojiPalette>;

export const DefaultEmojiPalette: Story = {
    render: (args) => {
        const scopeRef = useRef<HTMLDivElement>(null);

        return (
            <div ref={scopeRef} style={{ padding: "20px", height: "300px", border: "2px solid black" }}>
                <EmojiPalette {...args} scopeRef={scopeRef} />
            </div>
        );
    },
    args: {
        className: "custom-emoji-palette-class",
    },
};
