// mui
import { Box } from '@mui/material';
// next
import Head from 'next/head';
// components
import CustomContainer from 'src/components/custom-container/CustomContainer';
import DashboardLayout from '../../layouts/dashboard';

import MainHeader from './components/MainHeader';
import CarouselBox from './components/CarouselBox';
import HistoryBox from './components/HistoryBox';

// ----------------------------------------------------------------------

Dashboard.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <>
      <Head>
        <title> Newwit - Wallet</title>
      </Head>

      <CustomContainer>
        <Box>
          <MainHeader />
        </Box>
        <Box mt={2.5}>
          <CarouselBox />
        </Box>
        <Box mt={2.5}>
          <HistoryBox />
        </Box>
      </CustomContainer>
    </>
  );
}