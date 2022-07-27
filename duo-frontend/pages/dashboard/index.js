import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// import styles from 'login.module.css';

// Imagens
import Logo from '../../public/DuoIcon.svg';

// Components
import FormItem from '../../components/formularioitem/index.js';

export default function Login() {
	const formlist = [
		{ nome: 'teste', votos: 20, ativo: true, key: '0' },
		{ nome: 'cabeca', votos: 23, ativo: true, key: '1' },
		{ nome: 'cintura', votos: 61, ativo: false, key: '2' },
		{ nome: 'um pe na frente', votos: 12, ativo: true, key: '3' },
		{ nome: 'e outro atras', votos: 15, ativo: true, key: '4' },
	];

	const router = useRouter();

	// States
	const [Status, setStatus] = useState(true);
	const [formItemName, setName] = useState('');
	const [formItemVotos, setVotos] = useState(0);
	const [overlayLeft, setOverlayLeft] = useState(true);
	const [overlayRight, setOverlayRight] = useState(false);

	const handleItemClick = (item) => {
		setName(item.nome);
		setStatus(item.ativo);
		setOverlayLeft(true);
		console.log('item clicked');
	};
	return (
		<div>
			<maincontent>
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
				<p>Seus formulários</p>
				<formularios>
					{formlist.map((item) => (
						<FormItem click={handleItemClick} props={item} key={item.key} />
					))}
				</formularios>
			</maincontent>

			<overlays>
				<overlaybackground
					onClick={() => {
						setOverlayLeft(false);
						setOverlayRight(false);
					}}
					style={{
						display: overlayLeft ? 'block' : 'none',
						position: 'fixed',
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						backgroundColor: '#00000050',
					}}
				/>
				<cardoverlay
					style={{
						minWidth: 180,
						position: 'fixed',
						display: 'block',
						width: 'fit-content',
						backgroundColor: Status ? '#00FF47' : 'black',
						padding: 15,
						paddingRight: 30,
						top: 0,
						bottom: 0,
						left: overlayLeft ? 0 : '-100%',
					}}>
					<status
						onClick={() => {
							setStatus(!Status);
						}}
						style={{
							overflow: 'hidden',
							boxSizing: 'content-box',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<statusicon
							style={{
								display: 'block',
								boxSizing: 'content-box',
								height: 8,
								aspectRatio: 1,
								backgroundColor: Status ? 'white' : 'transparent',
								borderRadius: 100,
								borderWidth: 2,
								borderStyle: 'solid',
								borderColor: 'white',
								marginRight: 10,
							}}
						/>
						<p style={{ color: 'white' }}>{Status ? 'Ativo' : 'Inativo'}</p>
					</status>
					<p>{formItemName}</p>
					<p>{formItemVotos}</p>
					<p>Votos</p>
					<perguntas>
						<p>Perguntas</p>
					</perguntas>
					<resultados>
						<p>Resultados</p>
					</resultados>
					<entrar>
						<p>Entrar</p>
					</entrar>
					<remover>
						<p>Remover</p>
					</remover>
				</cardoverlay>
				<overlayright></overlayright>
			</overlays>
		</div>
	);
}
