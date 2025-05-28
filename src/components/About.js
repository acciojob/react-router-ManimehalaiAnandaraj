import {Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <p>This is a sample react router program.</p>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        
        </div>
  )
}

export default About