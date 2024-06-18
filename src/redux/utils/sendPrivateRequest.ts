import { userMicroservice } from "src/services/axios";

const sendPrivateRequest =  async <T,>(request: () => Promise<T>) => {
    try {
        return await request()
    }
    catch (error: any) {
        if (error.response?.status === 401 || error.response?.status === 422){
            await userMicroservice.post('/tokens/refresh/');
            return await request()
        }
        throw error
    }
}

export default sendPrivateRequest