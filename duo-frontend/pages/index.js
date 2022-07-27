import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Logo from '../public/DuoIcon.svg';

export default function Home() {
	return (
		<div className={styles.container}>
			<div>
				<Link href={'./login'}>Professores</Link>
				<Link href={'./sobre'}>Sobre Nós</Link>
			</div>
			<logo
				style={{
					display: 'block',
					width: 523,
				}}>
				<Image
					src={Logo}
					alt='Duo Logo'
					width='100%'
					height='100%'
					layout='responsive'
					objectFit='contain'
				/>
			</logo>
			<codigo>
				<input placeholder='Código' />
				<button>Enviar</button>
			</codigo>
		</div>
	);
}
