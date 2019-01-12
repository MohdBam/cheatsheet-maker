<template>
    <div>
        <v-layout column>
            <v-flex>
                <div class="head">Add category</div>
                <v-form class="box">
                    <v-text-field v-model="category.name" label="name" required />
                    <v-text-field v-model="category.image" label="image" required />
                    <v-text-field v-model="category.description" label="description" required />
                    <v-alert :value="error">Please fill in all the fields</v-alert>
                    <v-btn class="indigo" dark @click="addCategory">Submit</v-btn>
                </v-form>
            </v-flex>
            <v-flex>
            {{category}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import CategoryService from "@/services/CategoryService.js"
export default {
    data(){
        return {
            category: {
                name: "",
                image: "",
                description : ""
            },
            error: false
            
        }
    },
    methods:{
        addCategory(){
            const areAllFieldsFilled = Object.keys(this.category).every(key => !!this.category[key])
            if(!areAllFieldsFilled){
                this.error = true
                console.log("error")
            }
            else{
                try{
                CategoryService.post(this.category)
                this.$router.push("/")
                }
                catch(err){
                    console.log(err)
                }
            }
        }
    }
}
</script>

<style>

.box { 
    background : #fff;
    width : 60%;
    margin: auto;
    padding : 20px;
    border-radius: 20px;
    
}

.head{
    width: 60%;
    margin: auto;
    background: #3f51b5;
    font-size:18px;
    font-weight: 500;
    color: white;
    padding: 15px;
    border-radius: 20px;
}

</style>
