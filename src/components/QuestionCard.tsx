import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
interface QuestionCardProps {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
}

const { confirm } = Modal

const QuestionCard: FC<QuestionCardProps> = props => {
  const nav = useNavigate()
  const { _id, title, isPublished, isStar, answerCount, createdAt } = props

  function copy() {
    message.success('复制成功')
  }

  function deleteQuestion() {
    confirm({
      title: '确定要删除吗？',
      content: '删除后将无法恢复',
      icon: <ExclamationCircleOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        message.success('删除成功')
      },
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag color="default">未发布</Tag>}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                nav(`/question/edit/${_id}`)
              }}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => {
                nav(`/question/stat/${_id}`)
              }}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm title="确定要复制吗？" okText="确定" cancelText="取消" onConfirm={copy}>
              <Button type="text" size="small" icon={<CopyOutlined />}>
                复制
              </Button>
            </Popconfirm>

            <Button type="text" size="small" icon={<DeleteOutlined />} onClick={deleteQuestion}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
