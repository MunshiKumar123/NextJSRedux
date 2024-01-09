import styles from './page.module.css';
import ClientButton from './common/ClientButton'
import Link from 'next/link'

const Home = async () => {
  const rawResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await rawResponse.json()
  console.log('users', users);
  return (
    <main className={styles.container}>
      <h3>Home Page</h3>
      <ul>
        {users?.map((item, index) => (
          <li key={index}>{item?.name}
            <ClientButton userName={item?.name} /></li>
        ))}
      </ul>
      <ol>
        <li><Link href='/common/about'>About </Link></li>
        <li><Link href='/common/home'>Home</Link></li>
      </ol>
    </main>
  );
};

export default Home;
