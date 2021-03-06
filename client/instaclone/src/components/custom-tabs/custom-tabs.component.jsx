import React from 'react';

import { Container } from './custom-tabs.styles';

import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridOnIcon from '@material-ui/icons/GridOn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const styles = {
  tab: {
      minWidth: 60,
      width: 60,
      margin: '0 1rem',
      color: 'gray'
  },
  labelIcon: {
    minHeight: 60,
    paddingTop: 0
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px'
    
  },
  icon: {
    width: 15, 
    margin: 0, 
    paddingRight: 5
  },
  selected: {
    color: 'black'
  },
  indicator: {
    color: 'gray', 
    top: 0, 
    backgroundColor: '#262626 ',
    height: 1
  }
};


const CustomTabs = ({classes}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Container>
            <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
            TabIndicatorProps={{style: styles.indicator}}
          >
            <Tab icon={<GridOnIcon style={styles.icon} />}  classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected, labelIcon: classes.labelIcon}} label="Posts" aria-label="phone" />
            <Tab icon={<BookmarkBorderIcon style={styles.icon}/>} classes={{root: classes.tab, wrapper: classes.wrapper, selected: classes.selected, labelIcon: classes.labelIcon}} label="Saved"aria-label="favorite" style={{maxHeight: 40}}/>
          </Tabs>
        </Container>
    )
}

export default withStyles(styles) (CustomTabs);
