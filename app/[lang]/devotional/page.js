import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DevotionalRootPage({ params }) {
  const { lang = 'en' } = await params;
  
  // Use current server time to determine today's date
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  
  redirect(`/${lang}/devotional/${month}-${day}`);
}
