import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Empty, Typography } from 'antd'
import { useTitle } from 'ahooks'

const { Title } = Typography

const initQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 10,
    createdAt: '2024-01-01',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 20,
    createdAt: '2024-01-02',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 30,
    createdAt: '2024-01-03',
  },
]

const List: FC = () => {
  useTitle('小慕问卷-我的问卷')
  const [questionList, setQuestionList] = useState(initQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && questionList.map(q => <QuestionCard key={q._id} {...q} />)}
      </div>
      <div className={styles.footer}>loadMore... 上划加载更多...</div>
    </>
  )
}

export default List
