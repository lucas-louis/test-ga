import { Box, Divider, Image, Link, VStack } from '@chakra-ui/react';
import { LANDING_URL } from '../config/constants';

const Footer = (): JSX.Element => (
	<Box as="footer" w="100vw" position="fixed" zIndex="10" bottom="0" bg="white">
		<Divider />
		<VStack py="16px">
			<Link href={`${LANDING_URL}`}>
				<Image src="/assets/edgar.care-logo.svg" alt="edgar.care-footer" w="150px" h="auto" />
			</Link>
		</VStack>
	</Box>
);

export default Footer;
