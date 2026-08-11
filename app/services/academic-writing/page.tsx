import ServicePage from '@/components/service-page'
import { getServiceContent } from '@/lib/service-content'

export default function AcademicWritingServicePage() {
  return <ServicePage service={getServiceContent('academic-writing')} />
}
