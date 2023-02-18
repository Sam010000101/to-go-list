import { Menu } from '@headlessui/react'

function DayDropdown() {
  return (
    <Menu>
      <Menu.Button className="group mx-1 mr-1 leading-9"><span className="px-1 py-1 text-white rounded-sm bg-blue-500">Go</span><span className="hidden group-aria-expanded:inline text-slate-500"> on day </span></Menu.Button>
      <Menu.Items className="inline mt-2">
        <Menu.Item>
          {({ active }) => (
          <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>1</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>2</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>3</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>4</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>5</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>6</button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
           <button className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>7</button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default DayDropdown;