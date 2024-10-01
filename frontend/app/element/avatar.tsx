// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0
import { memo } from "react";

import "./avatar.less";

interface AvatarProps {
    name: string;
    status: "online" | "offline" | "busy" | "away";
    imageUrl?: string;
}

const Avatar = memo(({ name, status = "offline", imageUrl }: AvatarProps) => {
    const getInitials = (name: string) => {
        const nameParts = name.split(" ");
        const initials = nameParts.map((part) => part[0]).join("");
        return initials.toUpperCase();
    };

    return (
        <div className={`avatar ${status}`}>
            {imageUrl ? (
                <img src={imageUrl} alt={`${name}'s avatar`} className="avatar-image" />
            ) : (
                <div className="avatar-initials">{getInitials(name)}</div>
            )}
            <div className={`status-indicator ${status}`} />
        </div>
    );
});

Avatar.displayName = "Avatar";

export { Avatar };
