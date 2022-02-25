import Link from 'next/Link'
import Layout from '../components/Layout'

export default function AboutPage(){
    return (
        <Layout title='About Page for DJ Events'>
            <h1>About</h1>
            <p>This is an app to find the hottest DJ and other musical events near you</p>
            <p>Version: 1.0.0</p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}