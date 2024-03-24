'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
	Button,
	FormControl,
	FormErrorMessage,
	Img,
	Input,
	Text,
	useBreakpointValue,
	useToast,
	VStack,
} from '@chakra-ui/react';

import { useAuthContext } from 'contexts/auth';

import useCustomState from 'hooks/useCustomState';

const Signup = (): JSX.Element => {
	const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useCustomState('');
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		setError: setPasswordError,
	} = useCustomState('');

	const router = useRouter();
	const searchParams = useSearchParams();

	const auth = useAuthContext();

	const toast = useToast({ duration: 2000, isClosable: true });

	const isMobile = useBreakpointValue({ base: true, sm: false });

	const signup = () => {
		if (!email) setEmailError(true);
		if (!password) setPasswordError(true);

		if (email && password) {
			auth.signup(email, password).then((response) => {
				toast({ title: response.title, status: response.status });
				if (response.status === 'success') {
					if (searchParams.get('redirect')) void router.push(searchParams.get('redirect') as string);
					else void router.push('/');
				}
			});
		} else toast({ title: 'Identifiants incorrects', status: 'error' });
	};

	return (
		<VStack spacing="128px" w="100%">
			<Img src="/assets/edgar.care-logo.svg" alt="edgar.care-logo" w={{ base: '200px', md: '300px' }} h="auto" />
			<VStack spacing="64px" maxW="400px">
				<VStack spacing="32px" w="100%">
					<FormControl isRequired isInvalid={emailError}>
						<Text size="boldMd">Adresse mail</Text>
						<Input
							type="email"
							w="100%"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setEmailError(false);
							}}
						/>
						{emailError && <FormErrorMessage>Adresse mail invalide</FormErrorMessage>}
					</FormControl>
					<FormControl isRequired isInvalid={passwordError}>
						<Text size="boldMd">Mot de passe</Text>
						<Input
							type="password"
							w="100%"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setPasswordError(false);
							}}
						/>
						{passwordError && <FormErrorMessage>Mot de passe invalide</FormErrorMessage>}
					</FormControl>
				</VStack>
				<VStack spacing="32px" w="100%">
					<Button variant="primary" size={isMobile ? 'md' : 'lg'} onClick={signup} w="100%">
						M'inscrire avec ces informations
					</Button>
					<Link
						href={
							searchParams.get('redirect')
								? `/connection/login?redirect=${searchParams.get('redirect')}`
								: '/connection/login'
						}
					>
						<Button variant="secondary" size={isMobile ? 'md' : 'lg'} w="100%">
							J'ai déjà un compte
						</Button>
					</Link>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default Signup;
