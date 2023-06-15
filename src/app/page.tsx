import Image from 'next/image';
import Counter from './counter';
import Link from 'next/link';

export default function Splash() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-end mx-auto w-full overflow-x-hidden py-20 space-y-10">
      <div className="pb-20">
        <Image
          src={'/expense.svg'}
          alt="expense tracker"
          width={250}
          height={500}
        />
      </div>
      <div className=" text-center px-4 font-semibold text-slate-200 text-4xl leading-10 tracking-wide ">
        <span>Manage your expenses</span>
      </div>
      <div className=" text-center px-6 ">
        <span className=" font-semibold text-slate-200 text-sm tracking-wide">
          Track and log your expenses via UPI, CC or CASH across
          multiple categories
        </span>
      </div>
      <div>
        <Link href={'/expenses'}>
          <button className="bg-white rounded-full px-14 py-3 uppercase  font-extrabold  text-lg tracking-widest text-slate-800">
            Start
          </button>
        </Link>
      </div>
    </main>
  );
}
