import { twMerge } from 'tailwind-merge';

export const TabSlider = ({ currentTab, setCurrentTab, tabItems }) => {
  return (
    <div>
      <div className="lg:w-fit max-w-[1200px] mx-auto flex pt-14 pb-16 relative scroll-smooth">
        <ul className="flex gap-4 flex-wrap justify-center overflow-x-hidden">
          {/* ALL */}
          <li
            className={twMerge('active tab', currentTab === 'all' && 'bg-primary text-white')}
            onClick={(e) => setCurrentTab('all')}
          >
            All
          </li>

          {/*  OTHER TAB ITEMS */}
          {tabItems?.map((item, i) => (
            <li
              key={i}
              className={twMerge('tab', currentTab === item && 'bg-primary text-white')}
              value={item}
              onClick={(e) => setCurrentTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
