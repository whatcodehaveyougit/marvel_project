import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import './nav.styles.scss'

const Nav = () => {

    return (
        <>
            <div>
                <Typography align="center" variant="h3">Marvel Application!</Typography>
            </div>
            <div className='navbar-links-container'>
                <Typography><Link to="/">Home</Link></Typography>
                <Typography><Link to="/about">About</Link></Typography>
            </div>
        </>
    )
}

export default Nav;