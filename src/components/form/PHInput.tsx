import { Input } from "antd";
import { Controller } from "react-hook-form";
type TPHInputProps = {
  type: string;
  name: string;
  label: string;
};
const PHInput = ({ type, name, label }: TPHInputProps) => {
  return (
    <div style={{marginBottom:"20px"}}>
      <label htmlFor={name}>{label}:</label>
      <Controller
        name={name}
        render={({ field }) => (
          <Input type={type} id={name} {...field}/>
        )}
      />
    </div>
  );
};
export default PHInput;
