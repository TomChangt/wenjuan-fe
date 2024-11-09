import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import QuestionCard from '../../components/QuestionCard'

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
  const [questionList, setQuestionList] = useState(initQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.map(q => (
          <QuestionCard key={q._id} {...q} />
        ))}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  )
}

export default List
