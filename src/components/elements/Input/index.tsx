import "./style.css";
interface InputProps {
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }
  
  export const Input = (props: InputProps) => {
    return <input {...props} />;
  };