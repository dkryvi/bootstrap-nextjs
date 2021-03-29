import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1" color="primary">
        Hello World!
      </Typography>
    </Box>
  );
}
