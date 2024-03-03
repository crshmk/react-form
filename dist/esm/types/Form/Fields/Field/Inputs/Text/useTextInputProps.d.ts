declare const useInputProps: () => {
    className: string;
    disabled: boolean;
    name: string;
    onChange: OnChange;
    onFocus: () => void;
    placeholder: string;
    type: InputType;
    value: string;
};
export default useInputProps;
export type InputProps = {
    className: string;
    disabled: boolean;
    errorMessage?: string;
    name: FormField['name'];
    onChange: OnChange;
    onFocus: Fn;
    placeholder: string;
    rows?: number;
    type: FormField['inputType'];
    value: string;
};
