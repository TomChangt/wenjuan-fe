import React, { FC } from 'react'
import { Button } from 'antd'
import styles from './Home.module.scss'
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATHNAME } from '../router'
const { Title, Paragraph } = Typography
const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷 1000 份，发布问卷 100 份，收到答卷 10000 份</Paragraph>
        <div>
          <Button type="dashed" onClick={() => navigate(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
