import { Popover, QRCode } from 'antd'

const src = 'http://weixin.qq.com/r/xhPUzCLEbH8TrWav90bU'

export default function Footer() {
  return (
    <nav className="text-xl mt-4 inline-flex gap-3">
      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/ileostar"
        target="_blank"
        title="GitHub"
      />
      <a
        className="icon-btn i-carbon-user-avatar-filled"
        rel="noreferrer"
        href="https://liuxinghao.top/"
        target="_blank"
        title="MyPage"
      />
      <Popover overlayInnerStyle={{ padding: 0 }} content={<QRCode value={src} bordered={false} />}>
      <a
        className="icon-btn i-carbon-logo-wechat"
        rel="noreferrer"
        target="_blank"
        title="微信公众号"
      />
      </Popover>
      <a
        className="icon-btn i-carbon-earth-filled"
        rel="noreferrer"
        href="https://blog.liuxinghao.top/"
        target="_blank"
        title="Blog"
      />
    </nav>

  )
}
