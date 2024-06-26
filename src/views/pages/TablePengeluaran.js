import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CContainer,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CRow,
  CHeader,
  CCol,
  CWidgetStatsA
} from '@coreui/react'
import { DocsLink } from 'src/components'

const TablePengeluaran = () => {
  return (
    <CContainer fluid>
      <CRow>Pengeluaran</CRow>
      <CContainer>
        <CRow>
          <CCol></CCol>
          <CCol></CCol>
        </CRow>
      </CContainer>
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
        </CTableBody>
      </CTable>
    </CContainer>
  )
}

export default TablePengeluaran
