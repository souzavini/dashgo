import { FormLabel, FormControl,FormErrorMessage,Input as ChakraInput,InputProps as ChakraInputProps } from '@chakra-ui/react'
import {FieldError} from 'react-hook-form';
import { forwardRef,ForwardRefRenderFunction} from 'react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps>
 = ({name,label,error,...rest},ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}

            <ChakraInput 
                name={name}
                id={name}
                bgColor="gray.900"
                focusBorderColor="pink.500"
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                size="lg"
                ref={ref}
                {...rest} />

                {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>)}
        </FormControl>
    );
}

export const Input = forwardRef(InputBase)