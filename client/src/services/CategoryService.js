import Api from "@/services/Api.js"
export default {
    post(category){
        return Api().post("/categories", category)
    },
    
    getAll(){
        return Api().get("/categories")
    },
    getOne(id){
        return Api().get("/categories/"+id)
    },
    edit(id,category){
        return Api().post("/categories/"+id,category)
    }
}