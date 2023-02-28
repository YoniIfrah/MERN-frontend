import { io } from 'socket.io-client'
import baseURL from '../api/baseUrl'

const socket = io(baseURL);

export default socket;