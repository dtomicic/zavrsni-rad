import { FormInputStyled } from "./style";

interface IFormInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type: string;
    errorMessage?: string;
}

const FormInput = (props: IFormInputProps) => {
    const { label, value, onChange, placeholder, type, errorMessage } = props;
    return (
        <FormInputStyled isError={errorMessage === '' ? false : true}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                placeholder={placeholder} 
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </FormInputStyled>
    );
};

export default FormInput;