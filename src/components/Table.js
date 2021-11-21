import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { format } from 'date-fns';
import React from 'react'

function MyTable(props) {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Series</TableCell>
              <TableCell>Season</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.episodes.map((item) =>
              <TableRow
                key={item.episode_id}>
                <TableCell component="th" scope="row">
                  {item.title}
                </TableCell>
                <TableCell>{item.series}</TableCell>
                <TableCell>{item.season}</TableCell>
                <TableCell>{format(new Date(item.air_date), 'dd/MM/yyyy')}</TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
}

export default MyTable;