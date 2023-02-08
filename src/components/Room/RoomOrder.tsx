import Card from '../Card'
import Input from '../Input'
import Modal from '../Modal'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle.js'
import { useState } from 'react'

const currency = (num: number) => {
  return `$ ${new Intl.NumberFormat().format(num)}`
}

const RoomOrder = () => {
  const [stayDate, setStayDate] = useState(['', ''])
  const stayDateHandler = (value: any) => {
    setStayDate(value)
  }
  return (
    <>
      <Card className="mx-auto mb-[0.8125rem] max-w-[36.8125rem]">
        <h3 className="mb-2 text-2xl">訂房資訊</h3>
        <p className="leading-8">房型</p>
        <div className="mb-4 bg-black px-[1.4375rem]  pt-[0.75rem] pb-[0.8125rem] text-xl text-white">
          Deluxe Single Room (豪華單人房)
        </div>
        <div className="-mx-[0.875rem] flex flex-wrap">
          <div className="w-6/12 px-[0.875rem]">
            <Input className="mb-4" label="姓名" />
          </div>
          <div className="w-6/12 px-[0.875rem]">
            <Input className="mb-4" label="聯絡電話" />
          </div>
          <div className="w-full px-[0.875rem]">
            <Input className="mb-4" label="E-mail" />
          </div>
          <div className="w-full px-[0.875rem]">
            <label className="text-[#6D6D6D]">入住/退房日期</label>
            <DateRangePicker
              onChange={stayDateHandler}
              value={stayDate}
              className="mb-6 h-10 w-full bg-[#EDEDED] text-center"
            />
          </div>
        </div>
      </Card>
      <Card className="mx-auto mb-[0.9375rem] flex max-w-[36.8125rem] items-center justify-between">
        <h3 className="text-2xl">付款方式</h3>
        <button className="h-10 flex-[0.8] border bg-black text-white">
          入住付款 <span className="text-yellow-500">(* 免信用卡、訂金)</span>
        </button>
      </Card>
      <div className="mx-auto max-w-[36.8125rem]">
        <div className="flex justify-between">
          <p>小計</p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <span>平日</span>
              <span>0 夜</span>
            </div>
            <div className="flex gap-3">
              <span>假日</span>
              <span>2 夜</span>
            </div>
          </div>
        </div>
        <div className="mb-[0.8125rem] flex items-center justify-between">
          <p>消費金額</p>
          <p className="text-lg font-bold">{currency(5400)}</p>
        </div>
        <button className="w-full bg-black py-3 text-xl tracking-[0.3em] text-white">
          預訂房間
        </button>
      </div>
    </>
  )
}

export default RoomOrder
