import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function DigitalMarketingPage() { return <ServicePage service={getServiceContent('digital-marketing')} /> }
