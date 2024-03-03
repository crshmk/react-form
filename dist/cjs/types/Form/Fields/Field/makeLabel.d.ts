type UcFirst = (name: FormField['name']) => string;
export declare const ucFirst: UcFirst;
type CamelToLabel = (field: FormField['name']) => string;
export declare const camelToLabel: CamelToLabel;
type MakeLabel = (field: FormField) => string;
declare const _default: MakeLabel;
export default _default;
