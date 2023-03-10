import React from 'react';
import {createRoot} from 'react-dom/client';

import {useProxy} from '@tylerlong/use-proxy';
import {$} from '@tylerlong/use-proxy/build/react';
// import {Component} from '@tylerlong/use-proxy/build/react';

import {Button} from 'antd-mobile';

class Store {
  count = 10;
  increase() {
    this.count += 1;
  }
  decrease() {
    this.count -= 1;
  }
}
const store = useProxy(new Store());

const App = $((props: {store: Store}) => {
  const store = props.store;
  return (
    <>
      <Button color="primary" fill="outline" onClick={() => store.decrease()}>
        -
      </Button>
      {store.count}
      <Button color="primary" fill="outline" onClick={() => store.increase()}>
        +
      </Button>
    </>
  );
});

// class App extends Component<{store: Store}> {
//   render() {
//     const store = this.props.store;
//     return (
//       <>
//         <Button color="primary" fill="outline" onClick={() => store.decrease()}>
//           -
//         </Button>
//         {store.count}
//         <Button color="primary" fill="outline" onClick={() => store.increase()}>
//           +
//         </Button>
//       </>
//     );
//   }
// }

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container)
root.render(<App store={store} />);
