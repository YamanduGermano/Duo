import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// import styles from 'login.module.css';

import Logo from '../../public/DuoIcon.svg';

export default function Login() {
	const [Lembrar, setLembrar] = useState(false);
	const router = useRouter();

	return (
		<div>
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
			<p>Faça Login para usar o Duo!</p>
			<login>
				<input placeholder='Login' />
				<input placeholder='Senha' />
				<lembrar>
					<input
						placeholder='Lembre de Mim'
						type='radio'
						checked={Lembrar}
						onClick={() => {
							setLembrar(!Lembrar);
						}}
					/>
					<p>Lembrar de mim</p>
				</lembrar>
				<button
					onClick={(e) => {
						e.preventDefault();
						router.push('dashboard');
					}}>
					Isso ai!
				</button>
				<button>Não tem conta ainda?</button>
			</login>
		</div>
	);
}
