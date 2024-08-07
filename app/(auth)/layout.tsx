import styles from './layout.module.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.auth_container}>
			<div className={styles.auth_layout}>
				{children}
			</div>
		</div>
	);
}