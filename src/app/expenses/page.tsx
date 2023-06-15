'use client';
import expenses from '@/data';
import { useTransition, animated } from '@react-spring/web';
import { useState } from 'react';

export default function Expenses() {
  //get window height
  //const height = window.innerHeight;

  //init
  const [list, setList] = useState(expenses);

  const transitions = useTransition(list, {
    from: { opacity: 0, scaleY: 0 },
    enter: { opacity: 1, scaleY: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full px-4">
      <nav className="flex justify-end py-4 w-full ">
        <div className="rounded-full px-4 py-2.5 bg-white shadow-md">
          <span className="uppercase text-slate-800 font-semibold text-lg">
            M
          </span>
        </div>
      </nav>
      <div className="my-5 rounded-md bg-white w-full shadow-md p-4 grid grid-cols-1 overflow-y-scroll overscroll-y-contain h-1/3 divide-y  ">
        {transitions((props, item) => {
          return (
            <animated.div key={item.id} style={{ ...props }}>
              <div className="text-slate-800 flex justify-between py-3">
                <span className="self-center flex flex-col space-y-1">
                  <span className="text-xl font-bold  tracking-tighter leading-snug self-start">
                    {item.title}
                  </span>
                  <div className="flex space-x-2 text-xs text-slate-600 self-start">
                    <span className="uppercase ">{item.paid_by}</span>
                    <span className="w-1 h-1 bg-slate-600 self-center rounded-full">
                      &nbsp;
                    </span>
                    <span>{item.category}</span>
                  </div>
                </span>
                <span className="self-center flex flex-col space-y-1">
                  <span className="text-xl font-bold tracking-tighter leading-snug self-end">
                    ${item.amount}
                  </span>
                  <span className="self-end text-xs text-slate-600">
                    {item.createdAt}
                  </span>
                </span>
              </div>
            </animated.div>
          );
        })}
      </div>
    </main>
  );
}
