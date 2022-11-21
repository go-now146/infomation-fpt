import initializeAuthentication from '../../services/firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Fragment, useContext} from "react";
import { Navbar } from "react-materialize";
import { Link, useNavigate } from "react-router-dom";
import { navigator } from "./data"
import Context from '../../store/Context/Context';

initializeAuthentication()
const provider = new GoogleAuthProvider();

function Header() {
    const [login_user, setLoginUser] = useContext(Context)

    const navigate = useNavigate()

    const handleLogout = e => {
        e.preventDefault()

        localStorage.clear('accessToken')

        setLoginUser({})

        navigate('/', {replace: true})
    }

    const handleGoogleSignIn = async () => {
        const auth = getAuth()

        signInWithPopup(auth, provider)
            .then( result => {
                const user = result.user

                localStorage.setItem('accessToken', user.uid)

                setLoginUser(user)

                return user
            })

            .then( user => {
                navigate('/dashboard', {replace: true})
            })
            .catch(res => console.log(res))
    }

    console.log(login_user)

    return (
        <Fragment>
            <Navbar
                className='bg_primary bold'
                alignLinks="right"
                brand={<a className="brand-logo" href="#!"> Kim Loan- SE150874</a>}
                id="mobile-nav"
                menuIcon={<i class="fa-solid fa-bars"></i>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                {navigator.map((item, index) => {
                    return (
                        <Link style={{ fontSize: '1.5rem' }} key={`navigator-${index}`} to={item.path}>
                            {item.title}
                        </Link>
                    )
                })}     
                
                {!(localStorage.getItem('accessToken')) 
                    ? 
                    <a className='clickable' style={{ fontSize: '1.5rem' }} onClick={handleGoogleSignIn}>Log in</a> 
                    : 
                    <a className='bold m-x-0' style={{ fontSize: '1.5rem' }} disabled>{login_user.email}</a>
                }

                        
                {(localStorage.getItem('accessToken')) 
                    && 
                    <a className='clickable' style={{ fontSize: '1.5rem' }} onClick={handleLogout}>Log out</a>
                }
            </Navbar>
        </Fragment>
    )
}

export default Header;