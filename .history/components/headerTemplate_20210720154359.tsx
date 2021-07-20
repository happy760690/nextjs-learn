/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-09 16:19:20
 * @Editors: Mingjuan
 */
import Image from 'next/image'
import Link from 'next/link'
import styles from './headerTemplate.module.scss'
import utilStyles from '../styles/utils.module.css'

export default function headerTemplate({ city, home}: {
    city: string,
    home?: boolean
}){
    return (
        <header className={styles.header}>
        {home ? (
          <> 
            <i className={"iconfont " +  styles.return}>&#xe62c;</i>
            <i className={"iconfont " +  styles.location}>&#xe61b;</i>
            <span className={styles.city}>北京</span>
            <i className={"iconfont " +  styles.logo}>&#xe63d;</i>
            <span className={styles.leftWrap}>
              <i className={"iconfont " +  styles.search}>&#xe61f;</i>
              <i className={"iconfont " +  styles.user}>&#xe632;</i>
            </span>
          </>
        ) : (
          <>
            <h1>其它页面的头长这样</h1>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{'其它页面的头部信息'}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
    )
}