import { Table } from 'antd'

import type { ColumnsType, TableProps } from 'antd/es/table'

interface DataType {
  stuName: string
  stuNum: number
  sex: string
  email: string
  grade: number
}

const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'stuName',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '学号',
    dataIndex: 'stuNum',
    sorter: {
      compare: (a, b) => a.stuNum - b.stuNum,
      multiple: 3,
    },
  },
  {
    title: '年级',
    dataIndex: 'grade',
    sorter: {
      compare: (a, b) => a.grade - b.grade,
      multiple: 3,
    },
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
]

const data: DataType[] = [
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  // eslint-disable-next-line no-console
  console.log('params', pagination, filters, sorter, extra)
}
export default function Footer() {
  return (
    <div className="flex justify-center flex-between h-full w-full p-5 px-10 flex-col">
        <Table className="h-full" size="large" columns={columns} dataSource={data} onChange={onChange} />
    </div>

  )
}
