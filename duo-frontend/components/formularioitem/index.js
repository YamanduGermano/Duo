export default function FormItem(props) {
	return (
		<item
			onClick={() => {
				props.click(props.props);
			}}>
			<p>{props.props.votos}</p>
			<p>Votos</p>
			<p>{props.props.nome}</p>
		</item>
	);
}
