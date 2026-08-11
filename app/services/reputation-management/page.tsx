import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'
export default function ReputationManagementPage() { return <ServicePage service={getServiceContent('reputation-management')} /> }
