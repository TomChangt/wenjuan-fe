import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { Typography, Empty, Table, Tag, Button, Space, message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal

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

const Trash: FC = () => {
  useTitle('小慕问卷-回收站')
  const [questionList, setQuestionList] = useState(initQuestionList)
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([])
  const columns = [
    { title: '标题', dataIndex: 'title', key: 'title' },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: (isPublished: boolean) =>
        isPublished ? <Tag color="success">已发布</Tag> : <Tag color="default">未发布</Tag>,
    },
    {
      title: '是否星标',
      dataIndex: 'isStar',
      key: 'isStar',
      render: (isStar: boolean) =>
        isStar ? <Tag color="success">已星标</Tag> : <Tag color="default">未星标</Tag>,
    },
    { title: '回答数', dataIndex: 'answerCount', key: 'answerCount' },
    { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
  ]

  function del() {
    confirm({
      title: '确定要彻底删除吗？',
      content: '删除后将无法恢复',
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        message.success('删除成功 ' + selectedQuestionIds.join(','))
      },
    })
  }

  const TableElement = (
    <>
      <div style={{ marginBottom: 16 }}>
        <Space>
          <Button type="primary" disabled={selectedQuestionIds.length === 0} size="small">
            恢复
          </Button>
          <Button danger disabled={selectedQuestionIds.length === 0} size="small" onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={columns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedQuestionIds(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElement}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Trash
