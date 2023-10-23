export default function Footer() {
  return (
    <nav className="fixed bottom-5 text-xl mt-6 inline-flex gap-2">
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
