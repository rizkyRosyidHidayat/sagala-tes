import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TextInput({
  value,
  emitValue,
  active
}: {
  value: string;
  emitValue: (val: string) => void;
  active?: boolean;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  if (isEdit || active)
    return (
      <Input
        autoFocus={!active}
        borderColor="gray.200"
        onBlur={() => setIsEdit(false)}
        onChange={(e) => emitValue(e.target.value)}
        focusBorderColor="primary.500"
        size="sm"
        value={value}
      />
    );
  return (
    <Text as="span" fontSize="sm" onClick={() => setIsEdit(true)}>
      {value}
    </Text>
  );
}