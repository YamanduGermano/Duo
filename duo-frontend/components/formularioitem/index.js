import Styles from './formulario.module.css';

export default function FormItem(props) {
	return (
		<item
			style={{ color: 'black' }}
			className={Styles.item}
			onClick={() => {
				props.click(props.props);
			}}>
			<p className={Styles.votosCounter}>{props.props.votos}</p>
			<p>Votos</p>
			<p>{props.props.nome}</p>
		</item>
	);
}
