import { Menu } from '@headlessui/react'

function DayDropdown(props) {

  const {formatted} = props;
  const days = [];
  
  for (let i = 0; i < 7; i++) {
    days.push(
      <Menu.Item>
          {({ active }) => (
          <button onClick={(e) => {
            let errs = [];
            const numStr = e.target.textContent;
            if (numStr.length) {
              const selector = `#day-${numStr}-text-area`;
              const record = document.querySelector(selector);
              if (record) {             
                record.textContent = record.textContent.concat("\n", formatted);
                return;
              }
              errs.push("Unable to read day record");
            } else {
              errs.push("Unable to read day number");
            }
            console.log(...errs);
          }} id={i} className={`mx-1 px-2 py-1 text-sm text-white rounded-sm bg-slate-400 ${active && 'bg-blue-500'}`}>{i + 1}</button>
          )}
        </Menu.Item>
    );            
  }

  return (
    <Menu>
      <Menu.Button className="group mx-1 mr-1 leading-9"><span className="px-1 py-1 text-white rounded-sm bg-blue-500">Go</span><span className="hidden group-aria-expanded:inline text-slate-500"> on day </span></Menu.Button>
      <Menu.Items className="mt-2">
        {days}
      </Menu.Items>
    </Menu>
  )
}

export default DayDropdown;