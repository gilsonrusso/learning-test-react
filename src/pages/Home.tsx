import { Grid, Paper, Stack, styled, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: (theme.vars ?? theme).palette.text.secondary,
  flexGrow: 1,
  borderRadius: 0,
  height: '100%',
}))

const Home = () => {
  return (
    <Stack
      spacing={0}
      direction="row"
      minWidth={0}
      sx={(theme) => ({
        overflowY: 'hidden',
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 8px)`,
      })}
    >
      <Item
        sx={(theme) => ({
          minWidth: 300,
          maxWidth: 300,
          backgroundColor: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        })}
      >
        Item 1
      </Item>
      <Item sx={{ overflowY: 'auto' }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 2, md: 12 }}>
          {Array.from(Array(20)).map((_, index) => (
            <Grid
              sx={(theme) => ({
                backgroundColor: theme.palette.background.paper,
                height: 200,
                minWidth: 280,
                borderRadius: 0,
              })}
              key={index}
              size={{ xs: 2, sm: 2, md: 4, lg: 3 }}
            >
              <Typography>{index + 1}</Typography>
            </Grid>
          ))}
        </Grid>
      </Item>
    </Stack>
  )
}

export default Home
