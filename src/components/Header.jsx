import styles from './Header.module.css'

const Header = () =>{
    return(
        <header>
            <h2>Título</h2>
            <nav className={styles.navegador}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Conteúdo</a></li>
                <li><a href="#">Contatos</a></li>
            </nav>
        </header>
    )
    
}

export default Header;