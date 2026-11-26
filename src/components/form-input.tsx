type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function FormInput({
  id,
  label,
  placeholder,
  defaultValue,
  labelClassName = "ui-text-secondary",
  inputClassName = "",
}: FormInputProps) {
  return (
    <label className={`${labelClassName} block`} htmlFor={id}>
      {label}
      <input
        id={id}
        className={`ui-input ${inputClassName}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
}
