import styles from "../src/styles/Layout.module.css"
import { Nav } from "./Nav"
import Header from "./Header"
export default function Layout({ children }) {
  return (
    <>
    <Nav />
    <div className={styles.container}>
        <main className={styles.main}>
            <Header />
            { children }
        </main>
    </div>
    </>
  )
}
