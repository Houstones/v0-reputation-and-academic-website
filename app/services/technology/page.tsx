import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function TechnologyPage() { return <ServicePage service={getServiceContent('technology')} /> }
