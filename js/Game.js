class Game {
  constructor() {}
  //Función para obtener estado de juego de base de datos 
  getState(){
    //.ref hace referencia al data de la base de datos que nos interesa
    //.on escucha los cambios de la base de datos
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value",function(data) {
      gameState = data.val();
    });
  }
  start() {
    //Objeto para el formulario de registro
    form = new Form();
    form.display();

    //Objeto para el jugador 
    player = new Player();
    playerCount = player.getCount();
  }
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
}
