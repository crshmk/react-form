import * as react_jsx_runtime from 'react/jsx-runtime';

declare const FormWrapper: (props: Api) => react_jsx_runtime.JSX.Element;

declare const isEmail: Validation;

declare const isRequired: Validation;

type MinLen = (n: number) => (value: string) => boolean;
declare const minLen: MinLen;

type MaxLen = (n: number) => (value: string) => boolean;
declare const maxLen: MaxLen;

declare const isStrongPassword: Validation;

declare const index_d_isEmail: typeof isEmail;
declare const index_d_isRequired: typeof isRequired;
declare const index_d_isStrongPassword: typeof isStrongPassword;
declare const index_d_maxLen: typeof maxLen;
declare const index_d_minLen: typeof minLen;
declare namespace index_d {
  export { index_d_isEmail as isEmail, index_d_isRequired as isRequired, index_d_isStrongPassword as isStrongPassword, index_d_maxLen as maxLen, index_d_minLen as minLen };
}

export { FormWrapper as default, index_d as validations };
