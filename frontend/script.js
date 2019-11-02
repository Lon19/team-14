Vue.component('bubble', {
    props: ['sender', 'content','isloading'],
    template: `
    <div class="conversation" :class="{client_right_align:sender=='client'}">
        <img src="img/icon.png" v-if="sender=='server'" class="icon">
        <div :class="{bubble:true, bubble_server:sender=='server', bubble_client:sender=='client', bubble_loading:isloading}">
            {{isloading ? 'typing...' : content}}
        </div>
    </div>
    `
  })


var app = new Vue({
    el: '#app',
    data: {
      test: "hello world"
    },
    methods: {
      
    }
  })


  let registration = {
    questions: [
               {content: "Hello! How can I help you with your uni application today?", bindData: "Query"},
               {content: "No problem! First, could you tell me which country are you from?", bindData: "HomeCountry"},
               {content: "Which country do you want to study in? It can be multiple ones!", bindData: "TargetCountry"},
               {content: "What are the subjects you are currently studying? This will help us find your perfect match!", bindData: "Subject"},
               {content: "Now the tricky one, what is your estimated grade?", bindData: "Grade"},
               {content: "And what is the education system you are in?", bindData: "EducationType"},
               {content: "Lastly, what's your preferred finance range?", bindData: "FinanceRange"},
               {content: "Finally, what's your age?", bindData: "Age"},
            ],

    

  }


  function goToNextQuestion(){

  }