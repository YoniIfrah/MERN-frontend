import { create } from "apisauce";
const apiClient = create({
   baseURL: 'http://100.125.22.111:3000',
   headers: { Accept: 'application/vnd.github.v3+json' },
})
export default apiClient