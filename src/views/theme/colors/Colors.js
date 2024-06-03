import React, { useEffect, useState, createRef } from 'react'



const Colors = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nomer</th>
          <th scope="col">Kode</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Jumlahs</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
      </tbody>

    </table>
  )
}

export default Colors