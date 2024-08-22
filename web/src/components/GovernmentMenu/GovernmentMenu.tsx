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
        element = <LegislativeBills utils={utils} />
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