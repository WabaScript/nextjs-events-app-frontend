import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1><FaExclamationTriangle color='red'/><br/>404</h1>
                <h4>Looks like you've wondered off!</h4>
                <Link href='/'>Get back in there.</Link>
            </div>

        </Layout>
    )
}