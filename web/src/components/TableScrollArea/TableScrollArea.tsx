import cx from 'clsx';
import { useState } from 'react';
import { Group, Container, Table, ScrollArea, useMantineTheme, TableData, Text } from '@mantine/core';
import { Search } from '../Search/Search';
import classes from './TableScrollArea.module.css';
import { IconChevronCompactDown, IconChevronDown, IconChevronUp } from '@tabler/icons-react';


export function TableScrollArea({data, defaultSort} : {data: TableData, defaultSort?: {column: number, descending: boolean}}) {
  let theme = useMantineTheme();
  const [scrolled, setScrolled] = useState(false);
  const [sort, setSort] = useState(defaultSort || {column: 0, descending: true});
  const headers = data.head?.map((header, headerId) => (header != "" ? (
    <Table.Th className={classes.tableHeader} key={headerId} onClick={() => {
      if (sort.column == headerId) {
        setSort({column: headerId, descending: !sort.descending});
      }
      else {
        setSort({column: headerId, descending: true});
    }}}>
      <Group gap={0} justify='space-between'>
        <Text>{header}</Text>
        {
          (sort.column == headerId) ? (
            (sort.descending ? <IconChevronDown height={20}/> : <IconChevronUp height={20}/>)
          ) : null
        }
      </Group>
    </Table.Th>
    ) : (
      <Table.Th key={headerId}>
        <Group gap={0} justify='space-between'>
          <div style={{minWidth: 10}}></div>
        </Group>
      </Table.Th>
  )));
  
  const [rowEntries, setRows] = useState(data.body || []);
  
  let rows = rowEntries.sort((a, b) => {
    let cellA = a[sort.column];
    let cellB = b[sort.column];
    if (cellA == null) {
      cellA = "";
    }
    if (cellB == null) {
      cellB = "";
    }
    if (cellA == cellB) {
      return 0;
    }
    if (sort.descending) {
      return cellA < cellB ? -1 : 1;
    }
    else {
      return cellA > cellB ? -1 : 1;
    }
  }).map((row, rowId) => (
    <Table.Tr key={rowId}>
      {row.map((cell, cellId) => {
        let header = data.head?.[cellId];
        if (header && header != "") {
          return (
            <Table.Td style={{textOverflow: 'ellipsis', overflow: 'hidden', textWrap:"nowrap", maxWidth: 0 }} key={cellId}>{cell}</Table.Td>
          );
        }
        else {
          return (
            <Table.Td style={{textOverflow: 'ellipsis', overflow: 'hidden', textWrap:"nowrap", textAlign: "center", maxWidth: 0 }} key={cellId}>{cell}</Table.Td>
          );
        }
      })}
    </Table.Tr>
  ));

  return (
    <Container p={0} m={0} style={{rowGap:10, display: "flex", flexDirection:"column", flexGrow: 1, width: "100%"}}>
      <Group justify='space-between'>
        <Group>
          <Text fw={600} p={0} style={{flexGrow: 1}}>{data.caption}</Text>
          {
            ((rows && rows.length > 0) ? (<Text size='sm' style={{color: theme.colors.dark[1]}}>Showing {rows.length} result{rows.length > 1 ? "s" : ""}</Text>) : null)
          }
        </Group>
        <Search size='xs' w={200} onChange={(event) => {
          if (!data.body) return;
          setRows(data.body.filter((row) => row.some((cell) => (cell ? cell : <></>).toString().toLowerCase().includes(event.currentTarget.value.toLowerCase()))));
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
    </Container>
  );
}