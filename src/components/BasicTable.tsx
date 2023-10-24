import { Table } from 'antd'

import type { ColumnsType, TableProps } from 'antd/es/table'

interface DataType {
  key: number
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
    key: 1,
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    key: 2,
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    key: 3,
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    key: 4,
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    key: 5,
    stuName: '张三',
    stuNum: 123,
    sex: '男',
    email: '123@qq.com',
    grade: 2022,
  },
  {
    key: 6,
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
    <div className="overflow-hidden flex justify-center flex-between h-full w-full p-8 flex-col">
        <Table className="h-full visualBox rd-5 p-5 overflow-hidden" size="small" columns={columns} dataSource={data} onChange={onChange} bordered
    title={() => '学生信息列表'} />
    </div>
  )
}
