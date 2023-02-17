import { create } from "apisauce";
import baseURL from './baseUrl'

/**
 * sometimes can we need to change the baseUrl here and in the backend
 * via go to terminal -> ifconfig
 * look for inet 192.168.0.117 after the en0
 */
const apiClient = create({
   baseURL: baseURL,
   headers: { Accept: 'application/vnd.github.v3+json' },
})
export default apiClient