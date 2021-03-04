

// import React from "react";
// import { Table, ComboboxCell, CheckboxCell } from "@abcd19/st-grid";
// //import { Table, ComboboxCell, CheckboxCell } from "./Table1";
// import "@abcd19/st-grid/dist/index.css";
// import abcd19StGrid from './Table1';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';

// export default class MyTable extends React.Component {
//   constructor(props) {
//     super(props);

//     //rows
//     let items = [];
//     for (var i = 0; i < 100; i++) {
//       var newItem = {
//         data: {
//           Num: String(i),
//           checkboxCell: true
//         }
//       };
//       items.push(newItem);
//     }

//     //columns
//     let columns = [
//       {
//         title: "№",
//         alias: "Num"
//       },
//       {
//         title: "checkboxCell",
//         alias: "checkboxCell",
//         widthPix: 200,
//         type: {
//           constr: CheckboxCell,
//           settings: {}
//         }
//       },

//       {
//         title: "comboboxCell",
//         alias: "comboboxCell",
//         widthPix: 200,
//         type: {
//           constr: ComboboxCell,
//           settings: {
//             items: [
//               { raw: "val1", display: "val1" },
//               { raw: "val2", display: "val2" }
//             ],
//             clearBtnFlag: true
//           }
//         }
//       }
//     ];

//     this.onChangeItem = this.onChangeItem.bind(this);
//     this.onAddItem = this.onAddItem.bind(this);
//     this.onRemoveItem = this.onRemoveItem.bind(this);
//     this.onMouseDownItem = this.onMouseDownItem.bind(this);

//     this.state = {
//       items: items,
//       columns: columns,
//       selItemNum: 1
//     };
//   }

//   onChangeItem(rowNum, cellAlias, newVal) {
//     let { items } = this.state;
//     items[rowNum]["data"][cellAlias] = newVal;
//     this.setState({ items: items });
//   }

//   onAddItem(newItem) {
//     let { items } = this.state;
//     items.push(newItem);
//     this.setState({
//       items: items,
//       selItemNum: items.length - 1
//     });
//   }

//   onRemoveItem(rowNum) {
//     let { items } = this.state;
//     items.splice(rowNum, 1);
//     this.setState({
//       items: items
//     });
//   }

//   onMouseDownItem(rowNum, cellAlias) {
//     this.setState({ selItemNum: rowNum });
//   }

//   render() {
//     return (
//       <Table
//         width={900}
//         height={700}
//         selItemNum={this.state.selItemNum}
//         onChangeItem={this.onChangeItem}
//         onAddItem={this.onAddItem}
//         onRemoveItem={this.onRemoveItem}
//         onMouseDownItem={this.onMouseDownItem}
//         items={this.state.items}
//         columns={this.state.columns}
//       />
//     );
//   }
// }
