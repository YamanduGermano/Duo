export default function LinesIcon(color) {
	return (
		<lines>
			<svg width='34' height='34' viewBox='0 0 34 34' fill='none'>
				<path
					d={'M2 2L32 2M2 32H32M2 17H32'}
					stroke={color.color}
					strokeWidth={'4'}
					strokeLinecap={'round'}
				/>
			</svg>
		</lines>
	);
}
