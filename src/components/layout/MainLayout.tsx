type Props = {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <header className='bg-blue-100 flex-centerY px-5'>
        <h1 className='font-bold text-2xl text-blue-500'>Header Logo</h1>
        <nav className='flex gap-x-2'>
          <li>Menu1</li>
          <li>Menu2</li>
        </nav>
      </header>
      <main>{children}</main>
      <footer className='text-center bg-blue-100 text-blue-500 font-bold text-2xl'>Footer</footer>
    </>
  )
}
export default MainLayout
