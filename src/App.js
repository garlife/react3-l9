import React, { Children, useContext, useState } from 'react';

const MyContext = React.createContext();

const Text = ({ title }) => {

    return (
        <div>
            {title}
        </div>
    )
}

const BlockTextConsumer = ({ title, borderStyle }) => {
    return (
        <MyContext.Consumer>
            {(value) =>
                <div style={{ borderStyle: value.borderStyle }}>
                    <Text title={title} />
                </div>}
        </MyContext.Consumer>
    )
}

const WrapperBlockText = (props) => {
    return (
        <>
            <BlockTextHook {...props} />
            <BlockTextClass {...props} />
            <BlockTextConsumer {...props} />
        </>        
    )
}

class BlockTextClass extends React.Component {
    static contextType = MyContext

    render() {
        return (
            <div style={{ borderStyle: this.context.borderStyle }}>
                <Text title={this.props.title} />
            </div>
        )
    }
}

const BlockTextHook = ({title}) => {
    const value = useContext(MyContext);

    return (
        <div style={{ borderStyle: value.borderStyle }}>
            <Text title={title} />
        </div>
    )
}

const borderStyle = 'none'


const AppCon = () => {
    const [contextValue, setContextValue] = useState({borderStyle: 'solid'});
    
    return (
        <div>
            <MyContext.Provider value={contextValue} >
                <WrapperBlockText title={'Text title'} borderStyle={borderStyle} />
            </MyContext.Provider>
        </div>
    );
}

export default AppCon;