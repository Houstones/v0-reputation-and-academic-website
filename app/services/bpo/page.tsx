import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function BPOPage() { return <ServicePage service={getServiceContent('bpo')} /> }
