/// <reference types="react" />
type MakeGroupOption = (onChange: OnChange, field: FormField, selection: string | string[]) => (option: SelectOption) => JSX.Element;
declare const makeGroupOption: MakeGroupOption;
export default makeGroupOption;
