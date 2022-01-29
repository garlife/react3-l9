import React from 'react';

const Data = () => (
  <>
    <h1>Ссылки</h1>
    <label>Текст</label>
    <input type="text" ref={this.myRef} />
  </>
);

const WrapperData = React.forwardRef(
  (props, ref) => (
    <>
      <h1>Ссылки</h1>
      <label>Текст</label>
      <input type="text" ref={ref} />
    </>
  )
);

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <>
        <WrapperData ref={this.myRef} />
      </>
    );
  }
}
