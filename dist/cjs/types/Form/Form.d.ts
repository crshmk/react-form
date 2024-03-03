declare const Form: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default Form;
type Props = Api & {
    fields: FormField[];
    initialValuesState: FormValue[];
    initialErrorMessages: string[];
};
