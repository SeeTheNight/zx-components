import React from "react";
import style from './index.module.scss'

const color = [
  'rgb(245, 245, 245)',
  'rgb(211, 208, 208)',
  'rgb(184, 218, 184)',
  'rgb(133, 212, 133)',
  'rgb(71, 177, 71)',
  'rgb(0, 133, 0)'
]

export type LevelType = 0 | 1 | 2 | 3 | 4 | 5
interface ItemProps {
  level?: LevelType
}

const Item:React.FC<ItemProps> = ({
  level
}) => {
  const index = level || 0
  return (
    <span className={style.item} style={{
      backgroundColor: color[index]
    }}></span>
  )
}

export default Item
