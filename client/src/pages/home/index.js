import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Chat-Rooms`}</h1>
        <input className={styles.input} placeholder='Username...' />

        <select className={styles.input}>
          <option>-- Select Room --</option>
          <option value='Room Phu Quoc'>Phu Quoc</option>
          <option value='Room Madrid'>Madrid</option>
          <option value='Room Budapest'>Budapest</option>
          <option value='Room Bern'>Bern</option>
        </select>

        <button className='btn btn-secondary' style={{ width: '100%' }}>Join Room</button>
      </div>
    </div>
  );
};

export default Home;