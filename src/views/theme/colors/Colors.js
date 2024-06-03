import React, { useEffect, useState, createRef } from 'react'

const data = [
  { kode: 'A001', nama: 'Produk 1', tanggal: '2024-06-01', jumlah: 10 },
  { kode: 'A002', nama: 'Produk 2', tanggal: '2024-06-02', jumlah: 15 },
  { kode: 'A003', nama: 'Produk 3', tanggal: '2024-06-03', jumlah: 7 },
  { kode: 'A004', nama: 'Produk 4', tanggal: '2024-06-04', jumlah: 20 },
];

const Colors = () => {
  return (
<table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th>Tanggal</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.kode}</td>
                        <td>{item.nama}</td>
                        <td>{item.tanggal}</td>
                        <td>{item.jumlah}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default Colors