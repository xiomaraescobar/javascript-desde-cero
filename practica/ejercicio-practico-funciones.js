//create powerfullgirl objets
let currentLeader = null; //esta variable se declara para evitar que varias chicas sean lideres a mismo tiempo.
function PowerpuffGirl (name,color,superpower) {this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false
    this.displayInfo=function(){console.log(`Powerpuff Girl Information:
         Name: ${this.name}
         Color: ${this.color}
         Superpower: ${this.superpower}
         ${this.isLeader?'Leader: Yes':'Leader: No'}
        `)}
        // esta funcion es para declarar solo una lider
        this.becomeLeader = function(){
          //verificar si ya hay un lider
        if (currentLeader) {
            currentLeader.isLeader = false; //si hay un lider actualmente se cambia la propiedad isleader a false
            console.log(`${currentLeader.name} is no longer the leader.`); // se imprime que el lider anterior ya no es lider
        }
        this.isLeader = true; // establece el objeto actual como lider
        currentLeader = this;
        console.log(`${this.name} has become the leader of the powerpuff Girls !`);
    }
};
    const blossom = new PowerpuffGirl('Blossom','Pink','Ice Breath');
    const buttercup = new PowerpuffGirl('Buttercup','Green','Super Strength');
    const bubbles = new PowerpuffGirl('Bubbles','Blue','Flight');
    blossom.displayInfo();
    buttercup.displayInfo();
    bubbles.displayInfo();
    blossom.becomeLeader();
    blossom.displayInfo();
    buttercup.displayInfo();
    bubbles.displayInfo();