import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './dashboard.module.css';

// Imagens
import Logo from '../../public/DuoIcon.svg';

// Icones
import Call from '../../public/Icons/Call.svg';
import Clock from '../../public/Icons/Clock.svg';
import Close from '../../public/Icons/Close.svg';
import Exit from '../../public/Icons/Exit.svg';
import Glasses from '../../public/Icons/Glasses.svg';
import Lines from '../../public/Icons/Lines.svg';
import Live from '../../public/Icons/Live.svg';
import Ok from '../../public/Icons/Ok.svg';
import Open from '../../public/Icons/Open.svg';
import Power from '../../public/Icons/Power.svg';
import Search from '../../public/Icons/Search.svg';
import Tick from '../../public/Icons/Tick.svg';
import Trash from '../../public/Icons/Trash.svg';
import X from '../../public/Icons/X.svg';

// Components
import FormItem from '../../components/formularioitem/index.js';
import LinesIcon from '../../components/linesicon/index.js';

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
	const [overlayLeft, setOverlayLeft] = useState(false);
	const [overlayRight, setOverlayRight] = useState(false);

	const handleItemClick = (item) => {
		setName(item.nome);
		setVotos(item.votos);
		setStatus(item.ativo);
		setOverlayLeft(true);
		console.log('item clicked');
	};
	return (
		<div>
			<maincontent style={{ width: '100%' }}>
				<header
					style={{
						display: 'flex',
						alignItems: 'center',
						paddingLeft: 20,
						paddingRight: 20,
					}}>
					<logo
						className={styles.icon}
						style={{
							display: 'block',
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
					<LinesIcon color={'#000000'} style={{ float: 'right' }} />
				</header>
				<p>Seus formulários</p>
				<formularios
					style={{
						margin: 'auto',
						maxWidth: 800,
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap',
						width: '100%',
					}}>
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
					className={[styles.leftoverlay, overlayLeft ? null : styles.closed]}
					style={{ backgroundColor: Status ? '#00FF47' : 'black' }}>
					<status
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

					{/* Infos */}
					<p
						style={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: 40,
							margin: 0,
						}}>
						{formItemName}
					</p>
					<p
						style={{
							lineHeight: '90%',
							color: 'white',
							fontSize: 100,
							margin: 0,
						}}>
						{formItemVotos}
					</p>
					<p
						style={{
							color: 'white',
							fontSize: 14,
							margin: 0,
							marginBottom: 20,
						}}>
						Votos
					</p>

					{/* Buttons */}

					<perguntas className={styles.overlayItem}>
						<Image alt={'Perguntas Icone'} src={Lines} width={20} />
						<p style={{ marginLeft: 15 }}>Perguntas</p>
					</perguntas>
					<resultados className={styles.overlayItem}>
						<Image alt={'Resultados Icone'} src={Tick} width={20} />
						<p style={{ marginLeft: 15 }}>Resultados</p>
					</resultados>
					<entrar className={styles.overlayItem}>
						<Image alt={'Entrar Icone'} src={Power} width={20} />
						<p style={{ marginLeft: 15 }}>Entrar</p>
					</entrar>
					<spacer
						style={{
							display: 'block',
							flexGrow: 1,
						}}
					/>
					<remover className={styles.overlayItem}>
						<Image alt={'Remover Icone'} src={Trash} width={20} />
						<p style={{ marginLeft: 15 }}>Remover</p>
					</remover>
				</cardoverlay>
				<overlayright></overlayright>
			</overlays>
		</div>
	);
}
