export const handleInputChange =
  (
    setValue: React.Dispatch<React.SetStateAction<string>>,
    otherValue: string,
    error: string | null,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) =>
  (value: React.SetStateAction<string>) => {
    setValue(value);
    if (error && (!value || !otherValue)) {
      setError(null);
    }
  };
