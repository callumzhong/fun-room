import Input from '@/components/Input'
import currency from '@/utils/currency'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
import VariantModal from '../VariantModal'

const Button = () => (
  <Link to="/" className="block  w-full bg-black leading-9 text-white">
    回到首頁
  </Link>
)

const OrderErrorMessage = () => {
  return (
    <div className="mx-auto w-max text-center">
      <p className="mb-11 text-2xl text-red-700 md:text-5xl">預訂失敗</p>
      <p className="text-left"></p>
      <p className="mx-auto mb-8 max-w-[13.75rem] text-left text-sm md:max-w-[30rem] md:text-base">
        很抱歉，訂房失敗請稍候預訂或者電洽客服人員
      </p>
      <Button />
    </div>
  )
}

const OrderSuccessMessage = () => {
  return (
    <div className="mx-auto text-center md:max-w-[30rem]">
      <p className="mb-11 text-2xl md:text-5xl">已完成預訂</p>
      <p className="mx-auto mb-8 text-left text-sm md:text-base">
        感謝您的預訂，已將訂房詳情 Mail
        給您，若預取消訂房或異動，請再來電，由客服人員為您做異動。
      </p>
      <Button />
    </div>
  )
}

const OrderConfirm = ({
  onClose,
  onCurrentModalItem
}: {
  onClose: () => void
  onCurrentModalItem: (state: string) => void
}) => {
  return (
    <>
      <div className="mx-auto flex flex-col text-center">
        <p className="mb-11 text-2xl  md:text-5xl">確認訂房資訊</p>
        <Card className="mx-auto mb-7 flex w-full max-w-[36.8125rem] flex-col gap-4">
          <div className="flex flex-col gap-4 text-left md:flex-row">
            <p className="w-20">房型</p>
            <p className="text-[#6D6D6D]">Deluxe Single Room (豪華單人房)</p>
          </div>
          <div className="flex flex-col gap-4 text-left md:flex-row">
            <p className="w-20">姓名</p>
            <p className="text-[#6D6D6D]">櫻桃子</p>
          </div>
          <div className="flex flex-col gap-4 text-left md:flex-row">
            <p className="w-20">聯絡電話</p>
            <p className="text-[#6D6D6D]">0952000799</p>
          </div>
          <div className="flex flex-col gap-4 text-left md:flex-row">
            <p className="w-20">E-mail</p>
            <p className="text-[#6D6D6D]">momoko@funroom.com.tw</p>
          </div>
          <div className="flex flex-col gap-4 text-left md:flex-row">
            <p className="w-20">預訂日期</p>
            <p className="text-[#6D6D6D]">2021/05/22 ~ 2021/05/24</p>
          </div>
        </Card>
        <div className="mx-auto mt-auto w-full max-w-[36.8125rem]">
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
          <div className="flex gap-4">
            <button
              className="w-full border-2 border-black text-lg leading-10 tracking-[0.3em]"
              onClick={onClose}>
              取消
            </button>
            <button
              className="w-full bg-black text-lg leading-10 tracking-[0.3em] text-white"
              onClick={() => {
                onCurrentModalItem('success')
              }}>
              確認
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const RoomForm = () => {
  const [stayDate, setStayDate] = useState(['', ''])
  const stayDateHandler = (value: any) => {
    setStayDate(value)
  }
  const modalType = [OrderConfirm, OrderSuccessMessage, OrderErrorMessage]
  const [modalItemType, setModalItemType] = useState('confirm')

  const currentModalItemHandler = (state: string) => {
    setModalItemType(state)
  }
  const renderModalItemHandler = (onClose: () => void) => {
    switch (modalItemType) {
      case 'confirm':
        return (
          <>
            <OrderConfirm
              onCurrentModalItem={currentModalItemHandler}
              onClose={onClose}
            />
          </>
        )
      case 'success':
        return <OrderSuccessMessage />
      case 'error':
        return <OrderErrorMessage />
    }
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
      <VariantModal
        onAfterClose={() => {
          currentModalItemHandler('confirm')
        }}
        label="room order modal"
        renderButton={(onOpen) => (
          <button
            type="submit"
            onClick={onOpen}
            className="w-full bg-black text-lg 
            leading-10 tracking-[0.3em] text-white">
            預定房間
          </button>
        )}
        renderContent={(onClose) => renderModalItemHandler(onClose)}
      />
    </form>
  )
}

export default RoomForm
