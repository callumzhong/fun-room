import clsx from 'clsx';
import { useId } from 'react';

const Input = ({ className, label }: { className: string; label: string }) => {
  const id = useId()
  return (
    <div className={clsx('flex flex-col', className)}>
      <label className="text-[#6D6D6D]" htmlFor={id}>
        {label}
      </label>
      <input className="bg-[#EDEDED] h-10 px-3" id={id} type="text" />
    </div>
  )
}

export default Input
