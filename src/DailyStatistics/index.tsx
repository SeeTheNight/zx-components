import React from "react";
import Item, { LevelType } from "./Item"

export interface DaysCof {
  date: string,
  weight: LevelType
  mes: React.ReactNode
}

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface DailyStatisticsProps {
  days?: Array<DaysCof>
  currentMonth: Month
}

const DailyStatistics:React.FC<DailyStatisticsProps> = ({
  days
}) => {
  return (
    <div>
      {
        days?.map(item => <Item level={item.weight} key={item.date} />)
      }
    </div>
  )
}

export default DailyStatistics
