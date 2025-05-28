import {Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Welcome to my website</h1>
        <nav>
            <Link to="/about">About</Link>
        </nav>
    </div>
  )
}

export default Home