
## Button

Demo:

```tsx
import React, {useState} from 'react';
import { Button } from '@hellozhang/zx-components';

export default () => {
  const [value, setValue] = useState<string>('hello')
  const valueChange = () => {
    setValue(value === 'hello' ? 'world':'hello')
  }
  return (
    <Button onClick={valueChange}>{value}</Button>
  )
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
