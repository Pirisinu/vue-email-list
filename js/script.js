const { createApp} = Vue;

createApp({

  data(){
    return{
      emails: [],
      apiUrl: 'https://ﬂynn.boolean.careers/exercises/api/random/mail',
      emailRequest: 10
    }
  },
  methods:{
    getApi(){
      if(this.emails.length >= this.emailRequest) return
      axios.get(this.apiUrl)
        .then( (response) => {
          this.emails.push(response.data.response)
          this.getApi()
        } )
    }
  },
  mounted(){
    this.getApi()
    console.log(this.emails);
  }

}).mount('#app')