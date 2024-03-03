import { ReactNode } from 'react';
import { FieldContext as FieldContextType } from './MemoizedField';
declare const useField: () => FieldProps;
export declare const FieldProvider: (props: FieldProps) => import("react/jsx-runtime").JSX.Element;
export default useField;
type FieldProps = FieldContextType & {
    children: ReactNode;
};
