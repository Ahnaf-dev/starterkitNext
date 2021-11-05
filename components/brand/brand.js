import styles from './styles.module.scss'

function Brand({title, tagline}) {

return (
    <header className={styles.brand}>
        <h1>{title || "Page Title"}</h1>
        <p>{tagline || "Your Page Tagline"}</p>
     </header>   
)


}

export default Brand