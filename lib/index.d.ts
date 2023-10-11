declare module "swipeup-lib-react-native"{
    import * as React from "react";
    
    interface SwipeUpProps {
        children: React.ReactNode;
        borderColor?: string;
        backgroundColor?: string;
        touchIconColor?: string;
    }

    export const SwipeUp: React.ComponentType<SwipeUpProps>;
    export const SwipeUpExample: React.ComponentType;
}