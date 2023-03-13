import { useEffect, useState } from 'react';
import {AvatarWrapper} from "@/modules/shared/styles/Elements";

interface MiniUserAvatarProps {
    className?: string;
    size?: number;
}
export const MiniUserAvatar = ({ className, size }: MiniUserAvatarProps) => {
    const [avatarURL, setAvatarURL] = useState<string | null>(null);
    // const getAvatarURL = useUserStore((state) => state.getAvatarURL);
    // const { avatarKey } = useUserStore((state) => ({
    //     avatarKey: state.avatarKey,
    // }));
    //
    // useEffect(() => {
    //     getAvatarURL().then((url) => setAvatarURL(url));
    // }, [avatarKey]);

    return <AvatarWrapper size={size} className={className} src={avatarURL} />;
};
