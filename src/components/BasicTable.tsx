import { Pagination } from 'antd'

export default function Footer() {
  return (
    <div className="flex justify-center flex-between h-full p-5 px-10 flex-col">
      <div className="flex-1">
        111
      </div>
      <Pagination simple defaultCurrent={2} total={50} />
    </div>

  )
}
