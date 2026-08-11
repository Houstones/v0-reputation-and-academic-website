import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function WebDevelopmentPage() { return <ServicePage service={getServiceContent('web-development')} /> }
