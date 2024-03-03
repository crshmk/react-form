/// <reference types="react" />
declare const MemoizedField: import("react").MemoExoticComponent<(props: FieldContext) => import("react/jsx-runtime").JSX.Element>;
export default MemoizedField;
export type FieldContext = {
    clearError: (i: number) => () => void;
    errorMessage: string;
    field: FormField;
    setValues: SetValues;
    value: FormValue;
};
