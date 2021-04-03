import * as React from 'react';
declare const Sheet: React.ForwardRefExoticComponent<{
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    rootId?: string | undefined;
    snapPoints?: number[] | undefined;
    initialSnap?: number | undefined;
    springConfig?: import("popmotion").SpringOptions | undefined;
    disableDrag?: boolean | undefined;
} & import("./types").SheetEvents & React.RefAttributes<any>>;
export default Sheet;
