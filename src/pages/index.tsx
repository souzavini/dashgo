import { Flex, Button, Stack} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SingInFormData = {
  email:string;
  password:string;
}

const singInFormSchema = yup.object().shape({
  email:yup.string().required('E-mail obrigatório').email(),
  password:yup.string().required('Senha obrigatória'),
})

export default function SignIn() {

  const {register,handleSubmit,formState} = useForm({
    resolver:yupResolver(singInFormSchema)
  });

  const handleSignIn: SubmitHandler<SingInFormData> = async (values,event) => {
    await new Promise(resolve => setTimeout(resolve,2000))
  }

  const {errors} = formState;

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

        <Stack spacing="4">
          <Input name="email" type="email" label="Email" error={errors.email} {...register('email')}/>
          <Input name="password" type="password" error={errors.password} label="Senha" {...register('password')}/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
