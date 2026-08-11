import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function BrandingPage() { return <ServicePage service={getServiceContent('branding')} /> }
