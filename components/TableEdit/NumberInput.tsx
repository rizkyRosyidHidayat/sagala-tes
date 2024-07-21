import {
  NumberInputField,
  Progress,
  Text,
  NumberInput as Wrapper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function NumberInput({
  value,
  emitValue,
  max,
  isProgress,
  percent,
  active
}: {
  value: number;
  max: number;
  isProgress?: boolean;
  percent?: boolean;
  active?: boolean;
  emitValue: (val: number) => void;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [valueUpdate, setValueUpdate] = useState<number>(0);
  useEffect(() => {
    setValueUpdate(value);
  }, []);

  if (isEdit || active)
    return (
      <Wrapper
        defaultValue={value}
        min={0}
        max={max}
        autoFocus
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
        onChange={(e) => setValueUpdate(parseInt(e || "0"))}
        focusBorderColor="primary.500"
        size="sm"
        value={valueUpdate}
        width={100}
      >
        <NumberInputField />
      </Wrapper>
    );

  if (isProgress)
    return (
      <Progress
        onClick={() => setIsEdit(true)}
        value={value}
        size="sm"
        borderRadius="full"
      />
    );
  else
    return (
      <Text as="span" fontSize="sm" onClick={() => setIsEdit(true)}>
        {value}
        {percent ? "%" : ""}
      </Text>
    );
}
