import { Button, Img, VStack, Text, HStack, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import {
	BsQuestionCircle,
	BsChatText,
	BsClipboardPlus,
	BsCalendar3,
	BsFileEarmarkText,
	BsHouseDoor,
} from 'react-icons/bs';

import { useRouter } from 'next/navigation';
import HelpCenter from './helpCenter';
import TabCard from './TabCard';
import { LANDING_URL } from '../../../config/constants';

const NavBar = (): JSX.Element => {
	const tabs = [
		{
			name: 'Accueil',
			path: '/',
			icon: BsHouseDoor,
		},
		{
			name: 'Rendez-vous',
			path: '/dashboard/appointments',
			icon: BsCalendar3,
		},
		{
			name: 'Documents',
			path: '/dashboard/documents',
			icon: BsFileEarmarkText,
		},
		{
			name: 'Dossier medical',
			path: '/dashboard/medical',
			icon: BsClipboardPlus,
		},
	];

	const message = {
		name: 'Messagerie',
		path: '/dashboard/chat',
		icon: BsChatText,
	};

	const help = {
		name: "Besoin d'aide ?",
		path: '/dashboard/chat',
		icon: BsQuestionCircle,
	};

	const surname = 'Edgar';
	const name = 'Care';

	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;
	const router = useRouter();

	return (
		<VStack
			spacing="100px"
			w={isDrawer ? '100%' : '275px'}
			h="100%"
			p="32px 36px"
			bg="blue.100"
			position="fixed"
			left={0}
			top={0}
			zIndex={10}
			overflowY="scroll"
			sx={{
				'::-webkit-scrollbar': {
					width: '0px',
				},
			}}
		>
			<Link href="/">
				<Img src="/assets/edgar.care-logo.svg" w="200px" h="auto" />
			</Link>
			<VStack spacing="82px" w="100%">
				<VStack spacing="16px">
					{tabs.map((tab) => (
						<TabCard name={tab.name} path={tab.path} key={tab.path} icon={tab.icon} />
					))}
				</VStack>
				<VStack spacing="16px">
					<HelpCenter name={message.name} path={message.path} icon={message.icon} />
					<Link href="/simulation">
						<Button size="md">Prendre un rendez-vous</Button>
					</Link>
				</VStack>
				<VStack w="100%" spacing="16px">
					<HelpCenter name={help.name} path={help.path} icon={help.icon} />
					<HStack
						p="8px 16px"
						w="100%"
						bg="blue.900"
						borderRadius="16px"
						spacing="16px"
						onClick={() => {
							localStorage.removeItem('token');
							router.push(`${LANDING_URL}`);
						}}
						cursor="pointer"
					>
						<Img
							src={`https://source.boringavatars.com/marble/32/${surname}%20${name}?colors=A9B5F2,6811A6,1636D9,BF13A4`}
						/>
						<Text size="boldLg" color="blue.100">
							{surname} {name}
						</Text>
					</HStack>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default NavBar;
