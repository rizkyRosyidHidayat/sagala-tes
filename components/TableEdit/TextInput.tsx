import { Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TextInput({
  value,
  emitValue,
  active,
}: {
  value: string;
  emitValue: (val: string) => void;
  active?: boolean;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [valueUpdate, setValueUpdate] = useState<string>("");
  useEffect(() => {
    setValueUpdate(value);
  }, []);
  if (isEdit || active)
    return (
      <Input
        autoFocus={!active}
        borderColor="gray.200"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsEdit(false);
            emitValue(valueUpdate);
          }
        }}
        onBlur={() => {
          setIsEdit(false);
          setValueUpdate(value);
        }}
        onChange={(e) => setValueUpdate(e.target.value)}
        focusBorderColor="primary.500"
        size="sm"
        value={valueUpdate}
      />
    );
  return (
    <Text as="span" fontSize="sm" onClick={() => setIsEdit(true)}>
      {value}
    </Text>
  );
}
