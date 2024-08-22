import {Text} from '@mantine/core';
import classes from './Link.module.css';

export function Link({onClick, children} : {onClick?: () => void, children: any}) {
    return <Text className={classes.link} onClick={onClick}>{children}</Text>
}