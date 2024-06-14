import { Link } from "react-router-dom"
import styles from './Navigation.module.css';

const Navigation = () => {
    return (<div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>
          </ul>
        </nav>
      </div>
      )
}

export default Navigation;