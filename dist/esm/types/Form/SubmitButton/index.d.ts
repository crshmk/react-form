declare const SubmitButton: ({ isSubmitButtonHidden, onSubmit, submitButtonLabel }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default SubmitButton;
type Props = {
    isSubmitButtonHidden: boolean | undefined;
    onSubmit: () => void;
    submitButtonLabel: string | undefined;
};
