import {formatDate} from "../utils/formatDate";
import {IOperation} from "../types/operation";



export interface RawOperation {
  _id: string
  date: Date
  value: number
  writingDateTime: Date
}

export interface SendRawOperation {
  id: string
  date: Date
  value: number
}

export default class Operation {
  static getAdoptedItem(raw: RawOperation): IOperation {
    return {
      id: raw._id,
      date: formatDate(raw.date),
      value: raw.value,
      writingDateTime: raw.writingDateTime,
      editBtnLoading: false,
      delBtnLoading: false,
      total: null,
    }
  }

  static getRawItem(data: IOperation): SendRawOperation {
    return {
      id: data.id,
      date: new Date(data.date),
      value: data.value,
    }
  }

  static getAdoptedList(rawList: RawOperation[]): IOperation[] {
    const items = rawList.map(raw => Operation.getAdoptedItem(raw))

    return items.reduce((acc: IOperation[], it, i) => {
      const prevTotal = i === 0 ? 0 : items[i - 1].total

      items[i].total = (prevTotal === null ? 0 : prevTotal) + it.value

      acc.push(items[i])
      return acc
    }, [])
  }
}
