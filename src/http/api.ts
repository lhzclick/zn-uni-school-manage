import axios from './axios'
import url from './serverAPI.config'

export default  {
    login:(data:any)=>{
        return axios({
            url: url.login,
            method: 'post',
            data: data
        })
    }
}
