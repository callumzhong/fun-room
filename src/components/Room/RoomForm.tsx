import Input from '@/components/Input'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle.js'
import { useId, useState } from 'react'
import Modal from '../Modal'
import RoomOrder from './RoomOrder'

const OrderErrorMessage = () => {
  return (
    <div className="mx-auto w-max pt-12 pb-14 text-center">
      <p className="mb-11 text-5xl text-red-700">預訂失敗</p>
      <p className="text-left">很抱歉，訂房失敗請稍候預訂或者電洽客服人員</p>
    </div>
  )
}

const OrderSuccessMessage = () => {
  return (
    <div className="mx-auto w-max pt-12 pb-14 text-center">
      <p className="mb-11 text-5xl">已完成預訂</p>
      <p className="max-w-[30rem] text-left">
        感謝您的預訂，已將訂房詳情 Mail
        給您，若預取消訂房或異動，請再來電，由客服人員為您做異動。
      </p>
    </div>
  )
}

const RoomForm = () => {
  const [stayDate, setStayDate] = useState(['', ''])
  const stayDateHandler = (value: any) => {
    setStayDate(value)
  }
  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault()
      }}>
      <Input className="mb-4" label="姓名" />
      <Input className="mb-4" label="聯絡電話" />
      <Input className="mb-4" label="E-mail" />
      <label className="text-[#6D6D6D]">入住/退房日期</label>
      <DateRangePicker
        onChange={stayDateHandler}
        value={stayDate}
        className="mb-6 h-10 w-full bg-[#EDEDED] text-center"
      />
      <Modal
        label="room order modal"
        renderButton={(openHandler) => (
          <button
            type="submit"
            onClick={openHandler}
            className="w-full bg-black py-[0.625rem] text-sm text-white">
            預定房間
          </button>
        )}
        renderContent={() => <OrderSuccessMessage />}
      />
    </form>
  )
}

export default RoomForm
