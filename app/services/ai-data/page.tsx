import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function AIDataPage() { return <ServicePage service={getServiceContent('ai-data')} /> }
