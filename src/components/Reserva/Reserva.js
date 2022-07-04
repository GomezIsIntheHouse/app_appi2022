import React from 'react'
import { useForm } from "react-hook-form";

const Reserva = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
        <>
          <label>{label}</label>
          <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </>
      ));

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue="valorXDefect" {...register("example")} />
      
      
      <input {...register("exampleRequired", { required: true })} />
    
      {errors.exampleRequired && <span>This field is required</span>}
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Reserva