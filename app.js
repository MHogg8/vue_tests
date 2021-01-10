Vue.createApp({
    data() {
        return{
            goals:[],
            enteredGoal: ''

        };
    },
    methods:{
        addGoals(){
            this.goals.push(this.enteredGoal);
            this.enteredGoal = '';
        }
    }
}).mount('#app');

// const buttonGoal = document.querySelector('button');
// const goalInput = document.querySelector('input');
// const goalList = document.querySelector('ul')

// function addGoal() {
//     const enteredValue= goalInput.value;
//     const newItem = document.createElement('li');
//     newItem.textContent = enteredValue;
//     goalList.appendChild(newItem)
//     goalInput.value = '';
// }

// buttonGoal.addEventListener('click', addGoal);

