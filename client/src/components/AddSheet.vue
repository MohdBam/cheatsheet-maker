<template>
    <div>
        <v-layout column>
            <v-flex>
                <div class="head">Add sheet</div>
                <v-form class="box">
                    <v-text-field v-model="sheet.title" label="title" required />
                    <v-textarea v-model="sheet.description" label="description" multiline autogrow box rows="1" /> 
                    <v-alert :value="error">Please fill in all the fields</v-alert>
                    <v-btn class="indigo" dark @click="addSheet">Submit</v-btn>
                </v-form>
            </v-flex>
            <v-flex>
            {{sheet}}
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SheetService from "@/services/SheetService.js"
export default {
    data(){
        return {
            sheet: {
                title: "",
                description : "",
                categoryId:this.$route.params.id
            },
            error: false
            
        }
    },
    methods:{
        addSheet(){
            const areAllFieldsFilled = Object.keys(this.sheet).every(key => !!this.sheet[key])
            if(!areAllFieldsFilled){
                this.error = true
                console.log("error")
            }
            else{
                try{
                SheetService.post(this.sheet,this.$route.params.id)
                this.$router.push(`/categories/${this.$route.params.id}`)
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
    
}

.head{
    width: 60%;
    margin: auto;
    background: #3f51b5;
    font-size:18px;
    font-weight: 500;
    color: white;
    padding: 15px;
}

</style>
