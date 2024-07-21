import { Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";

const iconStatus = (status: string) =>
  status === "Approved" ? (
    <CheckCircleIcon className="size-5 text-green-500" />
  ) : status === "Disable" ? (
    <XCircleIcon className="size-5 text-red-500" />
  ) : (
    <InformationCircleIcon className="size-5 text-yellow-500" />
  );
const options = ["Approved", "Disable", "Error"];
export default function SelectInput({
  value,
  emitValue,
  active,
}: {
  value: string;
  active?: boolean;
  emitValue: (val: string) => void;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  if (isEdit || active)
    return (
      <Select
        onBlur={() => setIsEdit(false)}
        onChange={(e) => {
          emitValue(e.target.value);
          setIsEdit(false);
        }}
        focusBorderColor="primary.500"
        size="sm"
        value={value}
        placeholder="Select option"
        _placeholder={{ color: "red" }}
      >
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  return (
    <Flex onClick={() => setIsEdit(true)} alignItems="center" gap="8px">
      {iconStatus(value)}
      {value}
    </Flex>
  );
}
