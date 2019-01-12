import Api from "@/services/Api.js"
export default {
    post(sheet,id){
        return Api().post(`/categories/${id}/add`, sheet)
    },
    
    getAll(id){
        return Api().get(`/categories/${id}/sheets`)
    },
    edit(id,sheet){
        return Api().post("/sheets/"+id,sheet)
    }
}