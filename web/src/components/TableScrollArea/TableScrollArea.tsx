import cx from 'clsx';
import { useState } from 'react';
import { Group, Container, Table, ScrollArea, useMantineTheme, TableData, Text } from '@mantine/core';
import { Search } from '../Search/Search';
import classes from './TableScrollArea.module.css';


export function TableScrollArea({data} : {data: TableData}) {
  let theme = useMantineTheme();
  const [scrolled, setScrolled] = useState(false);
  const headers = data.head?.map((header, headerId) => <Table.Th key={headerId}>{header}</Table.Th>);
  
  const [rows, setRows] = useState<JSX.Element[]>(data.body ? (data.body?.map((row, rowId) => (
    <Table.Tr key={rowId}>
      {row.map((cell, cellId) => (
        <Table.Td style={{textOverflow: 'ellipsis', overflow: 'hidden', textWrap:"nowrap", maxWidth: 0 }} key={cellId}>{cell}</Table.Td>
      ))}
    </Table.Tr>
  ))) : []);

  return (
    <Container p={0} m={0} style={{rowGap:10, display: "flex", flexDirection:"column", flexGrow: 1, width: "100%"}}>
      <Group>
        <Text fw={600} p={0} style={{flexGrow: 1}}>{data.caption}</Text>
        <Search size='xs' w={200} onChange={(event) => {
          setRows(data.body ? (data.body?.filter((row) => row.some((cell) => (cell ? cell : <></>).toString().toLowerCase().includes(event.currentTarget.value.toLowerCase()))).map((row, rowId) => (
            <Table.Tr key={rowId}>
              {row.map((cell, cellId) => (
                <Table.Td style={{textOverflow: 'ellipsis', overflow: 'hidden', textWrap:"nowrap", maxWidth: 0 }} key={cellId}>{cell}</Table.Td>
              ))}
            </Table.Tr>
          ))) : []);
        }}/>
      </Group>
      <ScrollArea scrollbarSize={5} style={{borderRadius: 5}} viewportProps={{style: {maxHeight: 300}}} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table style={{backgroundColor: theme.colors.dark[6]}} stripedColor="dark.5" striped withColumnBorders stickyHeader withRowBorders={false}>
          <Table.Thead style={{backgroundColor: theme.colors.dark[6]}} className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <Table.Tr>{headers}</Table.Tr>
          </Table.Thead>
          <Table.Tbody>{(rows && rows.length > 0) ? rows : <Table.Tr><Table.Td colSpan={data.head?.length}>No results found.</Table.Td></Table.Tr>
          }</Table.Tbody>
        </Table>
      </ScrollArea>
      {
        ((rows && rows.length > 0) ? (<Text size='sm' style={{color: theme.colors.dark[1]}}>Showing {rows.length} result{rows.length > 1 ? "s" : ""}</Text>) : null)
      }
    </Container>
  );
}