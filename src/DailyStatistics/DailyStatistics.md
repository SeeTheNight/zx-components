## DailyStatistics

Demo:

```tsx
import React, { useState } from 'react';
import { DailyStatistics } from '@hellozhang/zx-components';
const test = [
  { date: '2022/9/28', weight: 1, message: '更新了 5 篇文章' },
  { date: '2022/9/29', weight: 0, message: '更新了 0 篇文章' },
];
for(let i = 1; i <= 30; i++) {
  const randomW = Math.floor(Math.random() * 5)
  const randomM = Math.floor(Math.random() * 50)
  const d = new Date(1664385698465)
  console.log(d.getMonth())
  test.push({
    date: '2022/9/30' + ' ' + randomW + ' ' + randomM,
    weight: randomW,
    message: randomM
  })
}
export default () => {
  return <DailyStatistics days={test} />;
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
