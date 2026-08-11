import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function AnalyticsPage() { return <ServicePage service={getServiceContent('analytics')} /> }
