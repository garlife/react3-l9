import React, {memo} from 'react';



const withAuthUser = (Comp) => {
  class WrapperComp extends React.PureComponent {
    constructor(props){
      super(props);
      console.log("constructor", "WrapperComp");
    }

    render() {
      if (!this.props.isAuth) {
        return <div>Something went Wrong!</div>
      }
      return (
        <div>
          <div>It's WrapperComp!</div>
          <Comp name={this.props.name} />
        </div >
      )
    }
  }

  const withWrapperComp2 = (Comp2) => {
    return (props) => <>
      <div>It's WrapperComp2!</div>
      <Comp {...props} />
      <WrapperComp {...props} />
      <Comp2 {...props} />
    </>
  }

  // return (props) => <WrapperComp {...props}/>;
  return memo(withWrapperComp2)(WrapperComp)
}

const User = ({ name }) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      <div>It's User</div>
      <p>Great! You are user now</p>
    </div>
  )
}


const Admin = ({ name }) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      <div>It's Admin</div>
      <p>Congrats, Administrator!</p>
    </div>
  )
}

const SuperUser = ({ name }) => {
  return (
    <div className="App">
      <h1>{name}</h1>
      <div>It's SuperUser</div>
      <p>Congrats, Super User!</p>
    </div>
  )
}

function AppHoc(props) {
  return (
    <div className="App">
      <header className="App-header">
        Lesson 9
      </header>
      <div id="content">
        {/* <User {...props} />
        <Admin {...props} />
        <SuperUser {...props} /> */}
        {withAuthUser(User)(props)}
        {withAuthUser(User)(props)}
      </div>
    </div>
  );
}

export default AppHoc;