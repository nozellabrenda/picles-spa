import { Link } from 'react-router-dom'
import { Header } from '../../components/common/Header'
import { Grid } from '../../components/layout/Grid/Grid'
import styles from './Pets.module.css'

export function Pets() {
    return (
        <Grid>
            <div className={StyleSheet.container}>
                <Header />
                <Link to="/pets/20">Ir para listagem</Link>
            </div>
        </Grid>
    )
}