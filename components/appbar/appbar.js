
import styles from './styles.module.scss'

function AppBar (props) {
    return (

        // props.uistyles returns a string, to access it use []
        <nav className={styles[props.uiStyles]}>
            <ul>
                <li>{props.brand}</li>
                <li>{props.company}</li>
                <li>Company Name</li>
            </ul>
        </nav>
    )
}


export default AppBar