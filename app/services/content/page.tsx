import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function ContentPage() { return <ServicePage service={getServiceContent('content')} /> }
