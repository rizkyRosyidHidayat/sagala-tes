import { formatDate } from "@/utils/helper";
import { Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
  const [valueUpdate, setValueUpdate] = useState<string>("");
  useEffect(() => {
    setValueUpdate(value);
  }, []);
  if (isEdit || active)
    return (
      <Input
        autoFocus={!active}
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
        borderColor="gray.200"
        size="sm"
        value={valueUpdate}
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
