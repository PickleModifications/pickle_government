import { useState } from 'react';
import { Group, Code, ScrollArea, rem, Box, Collapse, ThemeIcon, Text, UnstyledButton, } from '@mantine/core';
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
import classes from './Navbar.module.css';
import { NavigateToPage } from '../GovernmentMenu/GovernmentMenu';

export function Navbar({headerImage, headerText, openIndex, subSelected, categories} : {headerImage?: string, headerText?: string, selected?: number, subSelected?: number, openIndex?: number, categories: any[]}) {
    const [opened, setOpened] = useState(openIndex !== undefined ? openIndex : -1);
    const links = categories.map((item, itemId) => <LinksGroup isSelected={(openIndex !== undefined) ? (openIndex == itemId) : false} categoryLink={item.categoryLink} subSelected={subSelected} linkId={itemId} opened={opened == itemId} setOpened={setOpened} {...item} key={item.label} />);

    return (
        <nav className={classes.navbar} style={{height: "100%"}} >
            {
                headerText || headerImage ? (
                    <div className={classes.header}>
                        <Group>
                            <img width={25} src={headerImage} alt="Mantine logo" />
                            <Text fw={600}>{headerText}</Text>
                        </Group>
                    </div>
                ) : null
            }


            <ScrollArea className={classes.links}>
                <div className={classes.linksInner}>{links}</div>
            </ScrollArea>
        </nav>
    );
}

///////


interface LinksGroupProps {
    icon: React.FC<any>;
    label: string;
    isSelected?: boolean;
    subSelected?: number;
    opened?: boolean;
    linkId: number;
    setOpened: (opened: number) => void;
    links?: { icon?: any, label: string; link: string }[];
    categoryLink?: string;
}

export function LinksGroup({ linkId, isSelected, subSelected, setOpened, icon: Icon, label, opened, links, categoryLink }: LinksGroupProps) {
    const hasLinks = Array.isArray(links);
    const items = (hasLinks ? links : []).map((link, subLinkId) => (
            <Group
            gap={10}
            component="a"
            className={classes[(isSelected && subSelected !== undefined && subLinkId == subSelected) ? "link-selected" : "link"]}
            key={link.label}
            onClick={(event) => {
                event.preventDefault()
                NavigateToPage(link.link)
            }}
            >
                {link.icon ? <link.icon size={18} /> : null}
                <Text className={classes["link-text"]}>{link.label}</Text>
            </Group>
    ));
    console.log(classes["control-selected"])
    return (
        <>
        <UnstyledButton onClick={() => {
            setOpened(opened ? -1 : linkId);
            if (categoryLink) {
                NavigateToPage(categoryLink)
            }
        }} className={(isSelected && subSelected == undefined) ? classes["control-selected"] : classes.control }>
            <Group justify="space-between" gap={0}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeIcon variant="light" size={30}>
                    <Icon style={{ width: rem(18), height: rem(18) }} />
                    </ThemeIcon>
                    <Box ml="md">{label}</Box>
                </Box>
                {hasLinks && (
                    <IconChevronRight
                    className={classes.chevron}
                    stroke={1.5}
                    style={{
                        width: rem(16),
                        height: rem(16),
                        transform: opened ? 'rotate(-90deg)' : 'none',
                    }}
                    />
                )}
            </Group>
        </UnstyledButton>
        {hasLinks ? <Collapse in={(opened) ? true : false}>{items}</Collapse> : null}
        </>
    );
}