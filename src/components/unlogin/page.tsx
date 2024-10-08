import s from './styles.module.scss'
export default ()=>{
    return(
        <div className={s.direct_to_login}> 
        
        <h2 className={s.h2}>To use the site, you need the login</h2>

        <button className={s.buttom}>Press to Join</button>
        </div>
    )
}