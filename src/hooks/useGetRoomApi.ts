import { firestore } from '@/configs/firebase'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import { Room } from '../types'

type useGetRoomProps = {
  type: string
}

export default function useGetRoomApi({ type }: useGetRoomProps) {
  const ref = query(collection(firestore, 'rooms'), where('type', '==', type))
  const { isLoading, data } = useFirestoreQuery(['rooms'], ref)
  const roomData = data?.docs[0].data() as Room

  return {
    isLoading,
    roomData
  }
}
