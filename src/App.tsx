import React from 'react';
// import logo from './logo.svg';
import './App.css';

interface ITableProps {
  data: { Name: string, Id: number }[]
}

const Table: React.FC<ITableProps> = React.memo((props: ITableProps) => {
  return (
    <div className="Table" key="Lambda" id="Lambda">
      <table>
        <tbody>
          <tr><th>Name</th><th>Id</th><th>Action</th></tr>
          {props.data.map(element =>
            <tr key={element.Id}><td>{element.Name}</td><td>{element.Id}</td><td><button onClick={() => alert("Click")}>Surprise</button></td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

const Table2: React.FC<ITableProps> = React.memo((props: ITableProps) => {
  return (
    <div className="Table" key="NoLambda" id="NoLambda">
      <table>
        <tbody>
          <tr><th>Name</th><th>Id</th><th>Action</th></tr>
          {props.data.map(element =>
            <tr key={element.Id}><td>{element.Name}</td><td>{element.Id}</td><td><button>No Surprise</button></td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

interface IInputProps {
  value: string;
  setValue: (newValue: string) => void;
}

const MyInput: React.FC<IInputProps> = (props: IInputProps) => {
  return (
    <input value={props.value} onChange={e => props.setValue(e.target.value)} />
  )
}

type IAppProps = ITableProps;

class App extends React.Component<IAppProps, { Name: string }> {

  state = { Name: "" }

  render() {
    return <div className="App">
      <MyInput value={this.state.Name} setValue={v => this.setState(({ Name: v }))} />
      <input />
      <table>
        <tbody>
          <tr>
            <td>
              <Table data={this.props.data} />
            </td>
            <td>
              <Table2 data={this.props.data} />
            </td>
          </tr>
        </tbody>
      </table>

    </div>;
  }
}

export default App;
