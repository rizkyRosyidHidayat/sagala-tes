import { formatDate } from "@/utils/helper";
import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function DateInput({
  value,
  emitValue,
  active
}: {
  value: string;
  active?: boolean;
  emitValue: (val: string) => void;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  if (isEdit || active)
    return (
      <Input
        autoFocus={!active}
        onBlur={() => setIsEdit(false)}
        onChange={(e) => emitValue(e.target.value)}
        focusBorderColor="primary.500"
        borderColor="gray.200"
        size="sm"
        value={value}
        type="date-local"
        width={120}
      />
    );
  return (
    <Text as="span" fontSize="sm" onClick={() => setIsEdit(true)}>
      {formatDate(value)}
    </Text>
  );
}
