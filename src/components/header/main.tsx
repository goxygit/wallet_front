import s from './styles.module.scss'
import Logo from './logo/main'
import Auth from './unauthorized_header/main'
import Nav from './authorized_header/main'
export default ()=>{
    return(
        <header className={s.header}>
            <Logo/>
            <Nav/>
        </header>
    )
}