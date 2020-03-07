import React, { Component } from 'react';

class Table_and_lists extends Component {
render() {
  return (
    <div id="content-image">
            <table className="my-table">
                    <caption>School Schedule</caption>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>8:00 - 9:00</th>
                        <td></td>
                        <td>HILD 2B</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>9:00 - 10:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>HILD 2B DIS</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>10:00 - 11:00</th>
                        <td>CSE135</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>11:00 - 12:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                <div className="home-dash"></div>
                <div className="my-list">
                <h3>Unordered List</h3>
                <ul>
                        <li>Coffee</li>
                        <li>Game</li>
                        <li>Shopping</li>
                        <li>Motorcycle</li>
                        <li>Travel</li>
                </ul>
                <h3>ordered List</h3>
                <ol>
                        <li>Coffee</li>
                        <li>Game</li>
                        <li>Shopping</li>
                        <li>Motorcycle</li>
                        <li>Travel</li>
                </ol>
                <h3>definition list</h3>
                <dl>
                        <dt>Coffee</dt>
                        <dd>Black hot drink</dd>
                        <dt>Milk</dt>
                        <dd>White cold drink</dd>
                      </dl>
            </div>
    </div>
  );
}
}
export default Table_and_lists;
