import CardWrapper, { Card } from '@/app/_ui/dashboard/cards';
import RevenueChart from '@/app/_ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/_ui/dashboard/latest-invoices';
import { lusitana } from '@/app/_ui/fonts';
import { fetchCustomers, fetchLatestInvoices, fetchRevenue } from '@/app/_lib/data';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/_ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper /> 
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
