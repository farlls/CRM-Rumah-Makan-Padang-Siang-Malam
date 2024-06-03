import React from 'react'
import { CCard, CCardHeader, CCardBody, CContainer, CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CRow, CCol } from '@coreui/react'
import { DocsLink } from 'src/components'

const TablePengeluaran = () => {
  return (
    <CContainer fluid >
    <CRow xs={{ cols:4 }}>
    <CCol>
      <h1>Pengeluaran</h1>
    </CCol>
    <CCol></CCol>
    <CCol></CCol>
    <CCol>
    <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>@mdo</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>@fat</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
            <CTableDataCell>@twitter</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCol>
    </CRow>
    
    </CContainer>
    
  )
}

export default TablePengeluaran