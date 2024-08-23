import { Box, Center, Container, Group } from '@mantine/core';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
    IconChevronRight
} from '@tabler/icons-react';
import { Utils } from "../../App";
import { Home } from "./pages/home/Home";
import { LegislativeBills } from "./pages/legislative/bills/LegislativeBills";
import { LegislativeMembers } from './pages/legislative/members/LegislativeMembers';

let [page, setPage] = ["home", (value: any) => {}];

export function NavigateToPage(page: string) {
    setPage(page);
}

export function GovernmentMenu({utils} : {utils: Utils}) {
    [page, setPage] = useState("home");
    let element = <>No page selected.</>;
    let openIndex = undefined;
    let subSelected = undefined;
    if (page == "home") {
        element = <Home/>
        openIndex = 0;
    } else if (page == "legislative_branch_bills") {
        element = <LegislativeBills utils={utils} defaultBills={[
            { id: 1000, name: "The Freedom Act Which Will bring lots of freedom and stuff", description: "A bill to protect the rights of citizens." },
            { id: 1001, name: "The Equality Act", description: "A bill to promote equality and prevent discrimination." },
            { id: 1002, name: "The Climate Change Act", description: "A bill to address climate change and promote sustainability." },
            { id: 1003, name: "The Education Reform Act", description: "A bill to improve the education system." },
            { id: 1004, name: "The Healthcare Access Act", description: "A bill to ensure access to quality healthcare for all citizens." },
            { id: 1005, name: "The Tax Reform Act", description: "A bill to reform the tax system." },
            { id: 1006, name: "The Infrastructure Investment Act", description: "A bill to invest in infrastructure projects." },
            { id: 1007, name: "The Criminal Justice Reform Act", description: "A bill to reform the criminal justice system." },
            { id: 1008, name: "The Immigration Reform Act", description: "A bill to reform the immigration system." },
            { id: 1009, name: "The Gun Control Act", description: "A bill to regulate gun ownership and prevent gun violence." },
            { id: 1010, name: "The Environmental Protection Act", description: "A bill to protect the environment and natural resources." },
            { id: 1011, name: "The Cybersecurity Act", description: "A bill to enhance cybersecurity measures." },
            { id: 1012, name: "The Economic Stimulus Act", description: "A bill to stimulate economic growth and recovery." },
            { id: 1013, name: "The Social Welfare Act", description: "A bill to support social welfare programs." },
            { id: 1014, name: "The Energy Independence Act", description: "A bill to promote energy independence." },
            { id: 1015, name: "The Consumer Protection Act", description: "A bill to protect consumer rights." },
            { id: 1016, name: "The Privacy Rights Act", description: "A bill to protect privacy rights." },
            { id: 1017, name: "The Labor Rights Act", description: "A bill to protect labor rights." },
            { id: 1018, name: "The Housing Affordability Act", description: "A bill to promote affordable housing." },
            { id: 1019, name: "The Transportation Infrastructure Act", description: "A bill to invest in transportation infrastructure." },
            { id: 1020, name: "The Technology Innovation Act", description: "A bill to promote technological innovation and advancement." },
        ]} />
        openIndex = 1;
        subSelected = 0;
    } else if (page == "legislative_branch_members") {
        element = <LegislativeMembers/>
        openIndex = 1;
        subSelected = 1;
    }
    return(
        <Group gap={0} align='flex-start' p={0} pos={"absolute"} top={"50%"} left={"50%"} style={{ borderRadius: 5, transform: "translate(-50%, -50%)"}} w={1000} h={600} bg={"dark.7"}>
            <Navbar headerText={utils.translate("government_title")} headerImage={"https://static.wikia.nocookie.net/gtawiki/images/b/be/LosSantosSeal-GTAV.png"} openIndex={openIndex}  subSelected={subSelected} categories={[
                { label: 'Home', icon: IconAdjustments, categoryLink: "home" },
                {
                    label: utils.translate("legislative_branch"),
                    icon: IconNotes,
                    initiallyOpened: false,
                    links: [
                        { icon: IconNotes, label: utils.translate('legislative_branch_bills'), link: 'legislative_branch_bills' },
                        { icon: IconNotes, label: utils.translate('legislative_branch_members'), link: 'legislative_branch_members' },
                    ],
                },
                {
                    label: utils.translate("executive_branch"),
                    icon: IconNotes,
                    initiallyOpened: false,
                    links: [
                        { icon: IconNotes, label: utils.translate('executive_branch_orders'), link: '/' },
                        { icon: IconNotes, label: utils.translate('executive_branch_budget'), link: '/' },
                        { icon: IconNotes, label: utils.translate('executive_branch_members'), link: '/' },
                    ],
                },
                {
                    label: utils.translate("judicial_branch"),
                    icon: IconNotes,
                    initiallyOpened: false,
                    links: [
                        { icon: IconNotes, label: utils.translate('judicial_branch_laws'), link: '/' },
                        { icon: IconNotes, label: utils.translate('judicial_branch_cases'), link: '/' },
                        { icon: IconNotes, label: utils.translate('judicial_branch_lawyers'), link: '/' },
                    ],
                },
            ]}/>
            {element}
        </Group>
    )
}