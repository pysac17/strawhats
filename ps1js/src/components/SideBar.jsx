import React from 'react'
import "../styling/Sidebar.css"
import { Box,Avatar,Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';

const Sidebar = () => {
    const renderAccount = (
        <Box sx={{
            my: 3,
            mx: 2.5,
            py: 2,
            px: 2.5,
            display: 'flex',
            borderRadius: 1.5,
            alignItems: 'center',
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
          }} >
          <Avatar src={'https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'} alt="photoURL" />
        
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{'Name'}</Typography>
    
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {'Role'}
            </Typography>
          </Box>
        </Box>
      );

      function NavItem({ item }) {
      
        const active = false;
      
        return (
          <ListItemButton
            sx={{
              minHeight: 44,
              borderRadius: 0.75,
              typography: 'body2',
              color: 'text.secondary',
              textTransform: 'capitalize',
              fontWeight: 'fontWeightMedium',
              ...(active && {
                color: 'primary.main',
                fontWeight: 'fontWeightSemiBold',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                },
              }),
            }}
          >
            <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
              {/* {item.icon} */}
            </Box>
      
            <Box component="span">{item} </Box>
          </ListItemButton>
        );
      }


    const data = ['Dashboard','Store']
    const renderMenu = (
        <Stack component="nav" spacing={0.5} sx={{ px: 2,display:'flex'}}>
          {data.map((item) => (
            <NavItem key={item} item={item} />
          ))}
        </Stack>
      );

  return (
    <div className='sidebarContainer'>
        {renderAccount}
        {renderMenu}
    </div>
    
  )
}

export default Sidebar