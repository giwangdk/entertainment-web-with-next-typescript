import styles from './style.module.css'
import { MdMovie } from 'react-icons/md'
import ListNav from './ListNav'
import Avatar from '../Avatar'

function Sidebar() {
  return (
      <nav className={`${styles.sidebar} sticky top-0 z-50 p-5  flex  items-center justify-between md:rounded-xl md:mx-5 md:mt-5 lg:fixed lg:w-30 lg:flex-col lg:p-8 lg:w-20 lg:h-5/6 lg:ml-8 lg:my-8`}>
          <MdMovie className={styles.icon} size={45} />
      <ListNav />
      <Avatar />
    </nav>
  )
}

export default Sidebar