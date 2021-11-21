import React from "react";
import { AppBar, Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { DateRangeOutlined, ShowChart } from '@material-ui/icons'
import { useNavigate } from "react-router";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar: {
    paddingTop: 70,
    paddingLeft: 20
  }
})

export default function Layout({ children }) {

  const classes = useStyles()
  const navigate = useNavigate()

  const menuItems = [
    {
      text: 'Date picker',
      icon: <DateRangeOutlined />,
      path: '/'
    },

    {
      text: 'Rate',
      icon: <ShowChart />,
      path: '/rate'
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBar}
        position='fixed'
        elevation={0}
      >
        <Toolbar>
          <Typography> Test react JS project</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar>
          <Container>
            <Typography> Menu </Typography>
          </Container>
        </Toolbar>

        <Divider />

        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}>
          {children}
        </div>
      </div>
    </div>
  )
}