<template>
    <v-layout column>
        <v-btn :to="`/categories/${this.$route.params.id}/add`" color="indigo" class="mt-5"  absolute top right fab big dark>
              <v-icon>add</v-icon>
        </v-btn>
        <v-flex class="mt-5"  v-for="sheet in sheets" :key="sheet.id">
            <div class="c">
                <div class="head">{{sheet.title}}</div>
                <div class="box">{{sheet.description}}</div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import SheetService from '../services/SheetService'
export default {
    data() {
        return {
            sheets : []
        }
    },
    async created(){
        this.sheets = (await SheetService.getAll(this.$route.params.id)).data
    }
}
</script>

<style>
.head{
    width: 100%;
    background: #3F51B5;
    font-size:16px;
    font-weight: bold;
    color: white;
    padding: 10px;
    text-align: left;
    border-radius: 20px 20px 0px 0px;
}

.box { 
    background : #E8EAF6;
    width : 100%;
    margin-top: 0px;
    padding : 20px;
    color: #3F51B5;
    font-size: 14px;
    border-radius: 0px 0px 20px 20px;
}
.c {
    width: 80%;
    margin: auto;

}
</style>
