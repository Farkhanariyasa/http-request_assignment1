import React from 'react'
import { Toolbar, AppBar, Button } from '@mui/material'

const Tab = (props) => {
    const handleClickedPost = () => {
        props.getTab(true)
    }

    const handleClickedUser = () => {
        props.getTab(false)
    }

  return (
    <AppBar position="static">
        <Toolbar
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button color="inherit" onClick={handleClickedPost}>Post</Button>
            <Button color="inherit" onClick={handleClickedUser}>User</Button>
        </Toolbar>
    </AppBar>

  )
}

export default Tab
