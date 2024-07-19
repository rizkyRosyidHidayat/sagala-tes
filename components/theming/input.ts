import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
  field: {
    border: '0px solid',
    background: 'gray.50',
    borderRadius: 'full',
  },
  addon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',
  },
})

export const inputTheme = defineMultiStyleConfig({
  variants: { pill },
})