const Button = {
	baseStyle: {
		padding: '6px 16px',
		fontSize: '16px',
		height: 'auto',
		fontWeight: 600,
		borderRadius: '12px',
		whiteSpace: 'normal',
	},
	sizes: {
		customSm: {
			padding: '6px 12px',
			fontSize: '12px',
			fontWeight: 600,
			borderRadius: '8px',
		},
		customMd: {
			padding: '6px 16px',
			fontSize: '16px',
			fontWeight: 600,
			borderRadius: '10px',
		},
		customLg: {
			padding: '6px 16px',
			fontSize: '20px',
			fontWeight: 600,
			borderRadius: '12px',
		},
		xl: {
			padding: '8px 24px',
			fontSize: '24px',
			fontWeight: 600,
			borderRadius: '12px',
		},
		'2xl': {
			padding: '12px 24px',
			fontSize: '28px',
			fontWeight: 600,
			borderRadius: '16px',
		},
		'3xl': {
			padding: '12px 24px',
			fontSize: '32px',
			fontWeight: 600,
			borderRadius: '16px',
		},
	},
	variants: {
		primary: {
			bg: 'blue.700',
			color: 'white',
			border: '2px solid',
			borderColor: 'blue.700',

			mozTransition: 'all .3s ease-in-out',
			oTransition: 'all .3s ease-in-out',
			webkitTransition: 'all .3s ease-in-out',
			transition: 'all .3s ease-in-out',
			_hover: {
				_disabled: {
					bg: 'blue.700',
					color: 'white',
					border: '2px solid',
					borderColor: 'blue.700',
				},
				color: 'white',
				background: 'blue.900',
				border: '2px solid',
				borderColor: 'blue.900',

				mozTransition: 'all .3s ease-in-out',
				oTransition: 'all .3s ease-in-out',
				webkitTransition: 'all .3s ease-in-out',
				transition: 'all .3s ease-in-out',
			},
		},
		primaryBordered: {
			bg: 'blue.700',
			color: 'white',
			border: '2px solid',
			borderColor: 'blue.400',

			mozTransition: 'all .3s ease-in-out',
			oTransition: 'all .3s ease-in-out',
			webkitTransition: 'all .3s ease-in-out',
			transition: 'all .3s ease-in-out',
			_hover: {
				_disabled: {
					bg: 'blue.700',
					color: 'white',
					border: '2px solid',
					borderColor: 'blue.400',
				},
				color: 'white',
				background: 'blue.900',
				border: '2px solid',
				borderColor: 'blue.900',

				mozTransition: 'all .3s ease-in-out',
				oTransition: 'all .3s ease-in-out',
				webkitTransition: 'all .3s ease-in-out',
				transition: 'all .3s ease-in-out',
			},
		},
		secondary: {
			bg: 'white',
			color: 'blue.800',
			border: '2px solid',
			borderColor: 'blue.200',

			mozTransition: 'all .3s ease-in-out',
			oTransition: 'all .3s ease-in-out',
			webkitTransition: 'all .3s ease-in-out',
			transition: 'all .3s ease-in-out',
			_hover: {
				_disabled: {
					bg: 'white',
					color: 'blue.800',
					border: '2px solid',
					borderColor: 'blue.200',
				},
				color: 'white',
				background: 'blue.900',
				border: '2px solid',
				borderColor: 'blue.900',

				mozTransition: 'all .3s ease-in-out',
				oTransition: 'all .3s ease-in-out',
				webkitTransition: 'all .3s ease-in-out',
				transition: 'all .3s ease-in-out',
			},
		},
		tertiary: {
			bg: 'grey.500',
			color: 'white',
			border: '2px solid',
			borderColor: 'grey.500',

			mozTransition: 'all .3s ease-in-out',
			oTransition: 'all .3s ease-in-out',
			webkitTransition: 'all .3s ease-in-out',
			transition: 'all .3s ease-in-out',
			_hover: {
				_disabled: {
					bg: 'grey.500',
					color: 'white',
					border: '2px solid',
					borderColor: 'grey.500',
				},
				color: 'white',
				background: 'grey.900',
				border: '2px solid',
				borderColor: 'grey.900',

				mozTransition: 'all .3s ease-in-out',
				oTransition: 'all .3s ease-in-out',
				webkitTransition: 'all .3s ease-in-out',
				transition: 'all .3s ease-in-out',
			},
		},
		validate: {
			bg: 'green.600',
			color: 'white',
			border: '2px solid',
			borderColor: 'green.600',

			mozTransition: 'all .3s ease-in-out',
			oTransition: 'all .3s ease-in-out',
			webkitTransition: 'all .3s ease-in-out',
			transition: 'all .3s ease-in-out',
			_hover: {
				_disabled: {
					bg: 'green.600',
					color: 'white',
					border: '2px solid',
					borderColor: 'green.600',
				},
				color: 'white',
				background: 'green.800',
				border: '2px solid',
				borderColor: 'green.800',

				mozTransition: 'all .3s ease-in-out',
				oTransition: 'all .3s ease-in-out',
				webkitTransition: 'all .3s ease-in-out',
				transition: 'all .3s ease-in-out',
			},
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'primary',
	},
};

export default Button;
