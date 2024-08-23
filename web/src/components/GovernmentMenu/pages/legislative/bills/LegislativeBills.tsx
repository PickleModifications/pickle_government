import { Group, Center, Container, Text, Modal, Button, Overlay, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Utils } from "../../../../../App";
import { TableScrollArea } from '../../../../TableScrollArea/TableScrollArea';
import { Link } from '../../../../Link/Link';
import { useState } from 'react';
import { MenuModal } from '../../../../MenuModal/MenuModal';

type LegislativeBill = {
    id: number,
    name: string,
    description: string,
}

function BillViewer({setBillView, bill, utils} : {setBillView: (bill: LegislativeBill) => void, bill: LegislativeBill, utils: Utils}) {
    return (
        <>
            <Link onClick={() => {setBillView(bill)}}>View</Link>
        </>
    )
}

function BillContentView() {
    return (
        <>
            <Text>This is a bill content view.</Text>
        </>
    )
}

export function LegislativeBills({defaultBills, utils} : {defaultBills?: LegislativeBill[], utils: Utils}) {
    const [bills, setBills] = useState<LegislativeBill[]>(defaultBills || []);
    const [billView, setBillView] = useState<LegislativeBill | undefined>(undefined);
    return (
        <Container pos={"relative"} h={"100%"} style={{flexGrow: 1, flexDirection: "column"}} p={10} m={0}>
            <TableScrollArea defaultSort={{column: 0, descending: true}} data={{
                caption: "List of Congressional Bills",
                head: ['ID', 'Name', 'Description', ''],
                body: bills.map((bill, billIndex) => ["H.R. " + bill.id, bill.name, bill.description, <BillViewer setBillView={setBillView} bill={bill} utils={utils}/>])
            }}/>
            <MenuModal title={billView ? utils.translate("legislative_bill_title", billView.id + "", billView.name) : ""} close={() => {
                setBillView(undefined);
            }} visible={billView ? true : false}>
                <BillContentView/>
                
            </MenuModal>
        </Container>
    )
}