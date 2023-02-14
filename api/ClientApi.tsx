import { create } from "apisauce";
/**
 * sometimes can we need to change the baseUrl here and in the backend
 * via go to terminal -> ifconfig
 * look for inet 192.168.0.117 after the en0
 */
const apiClient = create({
   baseURL: 'http://192.168.0.117:3000',
   headers: { Accept: 'application/vnd.github.v3+json' },
})
export default apiClient